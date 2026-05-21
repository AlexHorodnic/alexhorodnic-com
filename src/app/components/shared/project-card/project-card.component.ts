import { Component, input } from '@angular/core';

import { ProjectItem } from '../../../data/portfolio.data';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';

@Component({
  selector: 'app-project-card',
  imports: [ProjectPreviewComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectItem>();
}
