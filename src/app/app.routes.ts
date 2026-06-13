import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((module) => module.HomeComponent),
    title: 'Alex Horodnic | Frontend Developer',
  },
  {
    path: 'projects/operations-dashboard',
    loadComponent: () =>
      import('./pages/operations-dashboard-case-study/operations-dashboard-case-study.component').then(
        (module) => module.OperationsDashboardCaseStudyComponent,
      ),
    title: 'Operations Dashboard Case Study | Alex Horodnic',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
