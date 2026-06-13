import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface StorefrontImage {
  readonly src: string;
  readonly alt: string;
  readonly label: string;
  readonly layout: 'featured' | 'standard' | 'mobile';
}

@Component({
  selector: 'app-vertex-storefront-case-study',
  imports: [RouterLink],
  templateUrl: './vertex-storefront-case-study.component.html',
  styleUrl: './vertex-storefront-case-study.component.scss',
})
export class VertexStorefrontCaseStudyComponent implements OnInit, OnDestroy {
  private readonly portfolioDescription =
    'Frontend Developer based in Athens, Greece, building responsive Angular applications with strong UI quality, SEO, performance, and production reliability.';
  private readonly caseStudyDescription =
    'See how Alex Horodnic built Vertex Storefront, a responsive Angular commerce experience with stateful product discovery and a validated multi-step checkout.';

  constructor(private readonly meta: Meta) {}

  protected readonly techStack = [
    'Angular 21',
    'TypeScript',
    'Signals',
    'Reactive Forms',
    'SCSS',
    'Responsive UI',
  ];

  protected readonly gallery: readonly StorefrontImage[] = [
    {
      src: '/featured-projects/vertex-storefront/overview.png',
      alt: 'Vertex Storefront premium electronics homepage',
      label: 'Storefront landing experience',
      layout: 'featured',
    },
    {
      src: '/featured-projects/vertex-storefront/catalog.png',
      alt: 'Vertex product catalog with search, collections, and category filters',
      label: 'Catalog discovery',
      layout: 'standard',
    },
    {
      src: '/featured-projects/vertex-storefront/product-detail.png',
      alt: 'Vertex product detail page with variants, quantity, and purchase controls',
      label: 'Product selection',
      layout: 'standard',
    },
    {
      src: '/featured-projects/vertex-storefront/mobile-checkout.png',
      alt: 'Vertex four-step checkout shown on a mobile viewport',
      label: 'Mobile checkout',
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
