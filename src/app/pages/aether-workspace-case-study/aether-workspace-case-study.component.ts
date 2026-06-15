import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface WorkspaceImage {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly layout: 'featured' | 'standard' | 'mobile';
}

@Component({
  selector: 'app-aether-workspace-case-study',
  imports: [RouterLink],
  templateUrl: './aether-workspace-case-study.component.html',
  styleUrl: './aether-workspace-case-study.component.scss',
})
export class AetherWorkspaceCaseStudyComponent implements OnInit, OnDestroy {
  private readonly portfolioDescription =
    'Frontend Developer based in Athens, Greece, building responsive Angular applications with strong UI quality, SEO, performance, and production reliability.';
  private readonly caseStudyDescription =
    'See how Alex Horodnic built Aether Workspace, a private browser-local AI product using Angular, WebLLM, WebGPU, IndexedDB, and inspectable document grounding.';

  constructor(private readonly meta: Meta) {}

  protected readonly techStack = [
    'Angular 21',
    'TypeScript',
    'Signals',
    'WebLLM',
    'WebGPU',
    'IndexedDB',
    'Web Workers',
    'Vitest',
  ];

  protected readonly gallery: readonly WorkspaceImage[] = [
    {
      src: '/featured-projects/aether-workspace/chat.png',
      alt: 'Aether Workspace chat with local model readiness and source controls',
      label: 'Local AI chat and source scope',
      layout: 'featured',
    },
    {
      src: '/featured-projects/aether-workspace/knowledge.png',
      alt: 'Aether Knowledge page with private collections and local indexing controls',
      label: 'Private knowledge management',
      layout: 'standard',
    },
    {
      src: '/featured-projects/aether-workspace/prompts.png',
      alt: 'Aether Prompt Library with searchable reusable workflows',
      label: 'Reusable prompt workflows',
      layout: 'standard',
    },
    {
      src: '/featured-projects/aether-workspace/mobile.png',
      alt: 'Aether local AI chat adapted to a narrow mobile viewport',
      label: 'Mobile workspace',
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
