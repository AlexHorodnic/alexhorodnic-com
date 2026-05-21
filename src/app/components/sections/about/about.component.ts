import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly portfolio = portfolioData;
}
