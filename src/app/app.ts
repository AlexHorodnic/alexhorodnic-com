import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

import { portfolioData } from './data/portfolio.data';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly portfolio = portfolioData;
  protected readonly activeSection = signal('about');
  protected readonly scrollProgress = signal(0);
  protected readonly isScrolled = signal(false);
  protected readonly showScrollTop = signal(false);
  private observer?: IntersectionObserver;

  constructor(
    protected readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sectionIds = ['about', 'experience', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => this.document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          this.activeSection.set(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => this.observer?.observe(section));
    this.updateScrollProgress();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  protected updateScrollProgress(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollTop = window.scrollY;
    const scrollableHeight = this.document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
    this.isScrolled.set(scrollTop > 18);
    this.showScrollTop.set(scrollTop > 520);
    this.scrollProgress.set(Math.min(Math.max(progress, 0), 1));
  }

  protected scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
