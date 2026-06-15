import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((module) => module.HomeComponent),
    title: 'Alex Horodnic | Frontend Developer',
  },
  {
    path: 'projects/aether-workspace',
    loadComponent: () =>
      import('./pages/aether-workspace-case-study/aether-workspace-case-study.component').then(
        (module) => module.AetherWorkspaceCaseStudyComponent,
      ),
    title: 'Aether Workspace Case Study | Alex Horodnic',
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
    path: 'projects/vertex-storefront',
    loadComponent: () =>
      import('./pages/vertex-storefront-case-study/vertex-storefront-case-study.component').then(
        (module) => module.VertexStorefrontCaseStudyComponent,
      ),
    title: 'Vertex Storefront Case Study | Alex Horodnic',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
