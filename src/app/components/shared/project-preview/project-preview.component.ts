import { Component, input } from '@angular/core';

import { ProjectItem } from '../../../data/portfolio.data';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
})
export class ProjectPreviewComponent {
  readonly project = input.required<ProjectItem>();
}
