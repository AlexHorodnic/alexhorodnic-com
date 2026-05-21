import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly portfolio = portfolioData;
}
