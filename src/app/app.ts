import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { portfolioData } from './data/portfolio.data';
import { ThemeService } from './services/theme.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly portfolio = portfolioData;
  protected readonly contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });
  protected readonly contactFormState = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  protected readonly contactFormStatusMessage = signal('');
  protected readonly skillIconPaths: Record<string, string> = {
    Angular: 'M12 3 4.5 5.7 5.7 16.8 12 21l6.3-4.2L19.5 5.7 12 3Z M9.2 15h5.6L12 8.4 9.2 15Z',
    TypeScript: 'M4 4h16v16H4V4Z M8 9h7 M11.5 9v8 M15 16.3c.7.5 1.4.7 2.2.7 1 0 1.8-.5 1.8-1.4 0-.8-.5-1.2-1.8-1.6-1.2-.4-2-1-2-2.2 0-1.2 1-2 2.4-2 .8 0 1.5.2 2 .5',
    JavaScript: 'M4 4h16v16H4V4Z M8 15.8c.4.8 1 1.2 1.8 1.2 1.1 0 1.7-.7 1.7-2V9 M15 16.3c.6.5 1.3.7 2.1.7 1 0 1.8-.5 1.8-1.4 0-.8-.5-1.2-1.8-1.6-1.2-.4-2-1-2-2.2 0-1.2 1-2 2.4-2 .8 0 1.5.2 2 .5',
    HTML: 'M5 4h14l-1.3 14.5L12 21l-5.7-2.5L5 4Z M9 8h6 M8.8 12h5.9l-.3 3.2-2.4 1-2.4-1-.1-1.2',
    'CSS / SCSS': 'M5 4h14l-1.3 14.5L12 21l-5.7-2.5L5 4Z M15.8 8H8.2l.3 4h6.8l-.4 3.3-2.9 1.1-2.9-1.1',
    'Responsive UI': 'M4 6h16v10H4V6Z M8 20h8 M11 16v4 M17 9h2 M5 18h2',
    'SEO Optimization': 'M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z M15.5 15.5 20 20 M9 11.5l1.4 1.4L13.5 9',
    'REST APIs': 'M7 7h10v10H7V7Z M3 12h4 M17 12h4 M12 3v4 M12 17v4 M5 5l2 2 M17 17l2 2',
    'Performance Optimization': 'M5 19a8 8 0 1 1 14 0 M12 19h.01 M12 14l4-4',
    Accessibility: 'M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M4 8h16 M12 8v13 M8 21l4-7 4 7 M8 11h8',
    Git: 'M12 3 21 12 12 21 3 12 12 3Z M9 9l6 6 M9 15h.01 M12 12h.01 M15 9h.01',
    Jira: 'M5 12 12 5l7 7-7 7-7-7Z M9 12l3-3 3 3-3 3-3-3Z',
    Figma: 'M10 3h4a2 2 0 1 1 0 4h-4V3Z M10 7h4a2 2 0 1 1 0 4h-4V7Z M10 11h4a2 2 0 1 1-2 2 2 2 0 0 1-2-2Z M6 7h4v4H6a2 2 0 1 1 0-4Z M6 11h4v4a2 2 0 1 1-4 0v-4Z',
    RxJS: 'M5 12a7 7 0 0 1 14 0 M8 12a4 4 0 0 1 8 0 M11 12a1 1 0 0 1 2 0 M12 13v7',
    React: 'M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0 M3 12c2-4 16-4 18 0-2 4-16 4-18 0Z M5.5 5.5c4.2-.9 11.2 11.2 13 15 M18.5 5.5c-4.2-.9-11.2 11.2-13 15',
    Docker: 'M4 13h16l-1.8 4.4A4 4 0 0 1 14.5 20H9.2A5.2 5.2 0 0 1 4 14.8V13Z M6 10h3v3H6v-3Z M9 7h3v3H9V7Z M12 10h3v3h-3v-3Z M9 10h3v3H9v-3Z M15 10h3v3h-3v-3Z',
    'Google Analytics': 'M6 19V9 M12 19V5 M18 19v-7 M5 19h14',
    'Google Tag Manager': 'M12 3 21 12 12 21 3 12 12 3Z M8.5 12l3.5-3.5 3.5 3.5-3.5 3.5L8.5 12Z',
    Bitbucket: 'M5 5h14l-1.8 14H6.8L5 5Z M8.5 9h7L15 15h-6L8.5 9Z',
    Java: 'M9 18c1.8.8 4.2.8 6 0 M8 21c2.5 1 5.5 1 8 0 M11 14c-1.4-1.2 2.8-2.1 1.2-4.4 M13.5 14c1.2-1.2 4.1-1.8 2.6-4.1 M12 3c1.2 1.5-.8 2.2-.8 3.6',
    'Spring Boot': 'M19 5c-7.4.2-12.8 4.7-13.8 11.2C8.8 17.6 14.3 14 17 9 M5 19c3.6.7 8.8-.6 12-5',
    Oracle: 'M7 8h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8Z',
    MariaDB: 'M4 17c2-6 6-9 12-10 1.8-.3 3 .2 4 1.5-4.2.4-7.5 2.2-9.8 5.5 M4 17c2.8.7 5.4.2 7.8-1.5 M15 9l2 2',
    'Oracle ATG': 'M4 6h16v12H4V6Z M8 10h8 M8 14h5 M17 14h.01',
  };
  protected readonly activeSection = signal('skills');
  protected readonly isNavigationOpen = signal(false);
  protected readonly scrollProgress = signal(0);
  protected readonly isScrolled = signal(false);
  protected readonly showScrollTop = signal(false);
  private readonly sectionIds = ['skills', 'projects', 'services', 'experience', 'about', 'contact'] as const;
  private observer?: IntersectionObserver;
  private scrollFrame = 0;
  private activeSectionLockTimeout = 0;
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
    protected readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    history.scrollRestoration = 'manual';
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));

    const sections = this.sectionIds
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
    window.addEventListener('scroll', this.scheduleScrollUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleScrollUpdate, { passive: true });
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.scheduleScrollUpdate);
    window.removeEventListener('resize', this.scheduleScrollUpdate);

    if (this.scrollFrame !== 0) {
      window.cancelAnimationFrame(this.scrollFrame);
    }

    if (this.activeSectionLockTimeout !== 0) {
      window.clearTimeout(this.activeSectionLockTimeout);
    }
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

  protected scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.closeNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected toggleNavigation(): void {
    this.isNavigationOpen.update((isOpen) => !isOpen);
  }

  protected closeNavigation(): void {
    this.isNavigationOpen.set(false);
  }

  protected activateSection(sectionId: (typeof this.sectionIds)[number]): void {
    this.activeSection.set(sectionId);
    this.lockActiveSection();
    this.closeNavigation();
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

    if (currentSection?.id) {
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

  protected getContactFieldError(field: 'name' | 'email' | 'message'): string {
    const control = this.contactForm.controls[field];

    if (!control.touched || control.valid) {
      return '';
    }

    if (control.hasError('required')) {
      return `${field === 'email' ? 'Email' : field === 'name' ? 'Name' : 'Message'} is required.`;
    }

    if (control.hasError('email')) {
      return 'Enter a valid email address.';
    }

    return '';
  }

  protected async submitContactForm(): Promise<void> {
    this.contactFormStatusMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Please complete the required fields before sending.');
      return;
    }

    const endpoint = environment.contactFormEndpoint.trim();
    const accessKey = environment.contactFormAccessKey.trim();

    if (!endpoint || !accessKey) {
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Contact form is not configured yet. Add the endpoint and Web3Forms access key in the environment file.');
      return;
    }

    this.contactFormState.set('loading');

    const formValue = this.contactForm.getRawValue();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formValue.name,
          email: formValue.email,
          message: formValue.message,
          subject: `Portfolio contact from ${formValue.name}`,
          from_name: formValue.name,
        }),
      });

      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || 'Contact form submission failed.');
      }

      this.contactForm.reset();
      this.contactFormState.set('success');
      this.contactFormStatusMessage.set('Thanks. Your message has been sent.');
    } catch {
      this.contactFormState.set('error');
      this.contactFormStatusMessage.set('Something went wrong while sending your message. Please try again or email me directly.');
    }
  }

}
