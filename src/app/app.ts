import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ServicesComponent,
    ExperienceComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  constructor(protected readonly navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navigationService.init();
  }

  ngOnDestroy(): void {
    this.navigationService.destroy();
  }
}
