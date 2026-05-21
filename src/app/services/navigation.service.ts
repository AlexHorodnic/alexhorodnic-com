import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

export type SectionId = 'skills' | 'projects' | 'services' | 'experience' | 'about' | 'contact';

@Injectable({
  providedIn: 'root',
})
export class NavigationService implements OnDestroy {
  readonly activeSection = signal<SectionId>('skills');
  readonly scrollProgress = signal(0);
  readonly isScrolled = signal(false);
  readonly showScrollTop = signal(false);
  readonly sectionIds: readonly SectionId[] = ['skills', 'projects', 'services', 'experience', 'about', 'contact'];

  private observer?: IntersectionObserver;
  private scrollFrame = 0;
  private activeSectionLockTimeout = 0;
  private initialized = false;

  private readonly scheduleScrollUpdate = (): void => {
    if (this.scrollFrame !== 0) {
      return;
    }

    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = 0;
      this.updateScrollState();
    });
  };

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.initialized) {
      return;
    }

    this.initialized = true;
    history.scrollRestoration = 'manual';
    history.replaceState(null, '', window.location.pathname + window.location.search);
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));

    const sections = this.sectionIds
      .map((id) => this.document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id && this.isSectionId(visibleEntry.target.id)) {
          this.activeSection.set(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => this.observer?.observe(section));
    window.addEventListener('scroll', this.scheduleScrollUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleScrollUpdate, { passive: true });
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer?.disconnect();
    window.removeEventListener('scroll', this.scheduleScrollUpdate);
    window.removeEventListener('resize', this.scheduleScrollUpdate);
    this.initialized = false;

    if (this.scrollFrame !== 0) {
      window.cancelAnimationFrame(this.scrollFrame);
      this.scrollFrame = 0;
    }

    if (this.activeSectionLockTimeout !== 0) {
      window.clearTimeout(this.activeSectionLockTimeout);
      this.activeSectionLockTimeout = 0;
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(event: Event, sectionId: 'top' | SectionId): void {
    event.preventDefault();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    history.replaceState(null, '', window.location.pathname + window.location.search);

    if (sectionId === 'top') {
      this.scrollToTop();
      return;
    }

    this.activateSection(sectionId);
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  activateSection(sectionId: SectionId): void {
    this.activeSection.set(sectionId);
    this.lockActiveSection();
  }

  private updateScrollState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollTop = window.scrollY;
    const scrollableHeight = this.document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
    this.isScrolled.set(scrollTop > 18);
    this.showScrollTop.set(scrollTop > 520);
    this.scrollProgress.set(Math.round(Math.min(Math.max(progress, 0), 1) * 1000) / 1000);
    this.updateActiveSectionFromScroll(scrollTop);
  }

  private updateActiveSectionFromScroll(scrollTop: number): void {
    if (this.activeSectionLockTimeout !== 0) {
      return;
    }

    const scrollPosition = scrollTop + window.innerHeight * 0.35;
    const documentHeight = this.document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (scrollTop + viewportHeight >= documentHeight - 8) {
      this.activeSection.set('contact');
      return;
    }

    const currentSection = this.sectionIds
      .map((id) => this.document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
      .filter((section) => section.offsetTop <= scrollPosition)
      .at(-1);

    if (currentSection?.id && this.isSectionId(currentSection.id)) {
      this.activeSection.set(currentSection.id);
    }
  }

  private lockActiveSection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.activeSectionLockTimeout !== 0) {
      window.clearTimeout(this.activeSectionLockTimeout);
    }

    this.activeSectionLockTimeout = window.setTimeout(() => {
      this.activeSectionLockTimeout = 0;
      this.updateActiveSectionFromScroll(window.scrollY);
    }, 900);
  }

  private isSectionId(value: string): value is SectionId {
    return this.sectionIds.includes(value as SectionId);
  }
}
