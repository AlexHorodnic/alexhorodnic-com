import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-services',
  imports: [SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  protected readonly portfolio = portfolioData;
}
