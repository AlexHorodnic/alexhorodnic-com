import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-experience',
  imports: [SectionHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly portfolio = portfolioData;
}
