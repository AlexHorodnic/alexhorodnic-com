import { Component, signal } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { NavigationService, SectionId } from '../../../services/navigation.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly portfolio = portfolioData;
  protected readonly isNavigationOpen = signal(false);
  protected readonly navItems: readonly { id: SectionId; label: string }[] = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor(
    protected readonly navigationService: NavigationService,
    protected readonly themeService: ThemeService,
  ) {}

  protected toggleNavigation(): void {
    this.isNavigationOpen.update((isOpen) => !isOpen);
  }

  protected scrollToSection(event: Event, sectionId: 'top' | SectionId): void {
    this.isNavigationOpen.set(false);
    this.navigationService.scrollToSection(event, sectionId);
  }
}
