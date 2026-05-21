import { Component } from '@angular/core';

import { portfolioData } from '../../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { SkillPillComponent } from '../../shared/skill-pill/skill-pill.component';

@Component({
  selector: 'app-skills',
  imports: [SectionHeaderComponent, SkillPillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly portfolio = portfolioData;
}
