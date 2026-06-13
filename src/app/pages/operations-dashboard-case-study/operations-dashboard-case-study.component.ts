import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface CaseStudyImage {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly layout: 'featured' | 'standard' | 'mobile';
}

@Component({
  selector: 'app-operations-dashboard-case-study',
  imports: [RouterLink],
  templateUrl: './operations-dashboard-case-study.component.html',
  styleUrl: './operations-dashboard-case-study.component.scss',
})
export class OperationsDashboardCaseStudyComponent implements OnInit, OnDestroy {
  private readonly portfolioDescription =
    'Frontend Developer based in Athens, Greece, building responsive Angular applications with strong UI quality, SEO, performance, and production reliability.';
  private readonly caseStudyDescription =
    'See how Alex Horodnic built a responsive Angular operations dashboard with feature-first architecture, device-aware workflows, and realistic enterprise UI states.';

  constructor(private readonly meta: Meta) {}

  protected readonly techStack = [
    'Angular 21',
    'TypeScript',
    'Signals',
    'RxJS',
    'Angular CDK',
    'SCSS',
  ];

  protected readonly gallery: readonly CaseStudyImage[] = [
    {
      src: '/featured-projects/operations-dashboard/overview.png',
      alt: 'Operations Dashboard overview with revenue metrics and recent activity',
      label: 'Operational overview',
      layout: 'featured',
    },
    {
      src: '/featured-projects/operations-dashboard/accounts.png',
      alt: 'Account operations directory with filters, status data, and bulk actions',
      label: 'Account operations',
      layout: 'standard',
    },
    {
      src: '/featured-projects/operations-dashboard/workflow.png',
      alt: 'Workflow queue with task cards organized in a Kanban board',
      label: 'Workflow queue',
      layout: 'standard',
    },
    {
      src: '/featured-projects/operations-dashboard/analytics.png',
      alt: 'Analytics view with revenue and workload visualizations',
      label: 'Operational analytics',
      layout: 'featured',
    },
    {
      src: '/featured-projects/operations-dashboard/mobile.png',
      alt: 'Operations Dashboard adapted to a narrow mobile viewport',
      label: 'Mobile experience',
      layout: 'mobile',
    },
  ];

  ngOnInit(): void {
    this.updateDescription(this.caseStudyDescription);
  }

  ngOnDestroy(): void {
    this.updateDescription(this.portfolioDescription);
  }

  private updateDescription(content: string): void {
    this.meta.updateTag({ name: 'description', content });
    this.meta.updateTag({ property: 'og:description', content });
    this.meta.updateTag({ name: 'twitter:description', content });
  }
}
