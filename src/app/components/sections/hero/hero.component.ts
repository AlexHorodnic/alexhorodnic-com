import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly portfolio = portfolioData;

  constructor(protected readonly navigationService: NavigationService) {}
}
