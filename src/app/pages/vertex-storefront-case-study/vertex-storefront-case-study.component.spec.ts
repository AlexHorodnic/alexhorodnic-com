import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { VertexStorefrontCaseStudyComponent } from './vertex-storefront-case-study.component';

describe('VertexStorefrontCaseStudyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertexStorefrontCaseStudyComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('presents the commerce engineering story and recruiter actions', () => {
    const fixture = TestBed.createComponent(VertexStorefrontCaseStudyComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.textContent?.trim(),
    );

    expect(compiled.querySelector('h1')?.textContent).toContain('Vertex Storefront');
    expect(compiled.textContent).toContain('Continuity without careless persistence');
    expect(compiled.textContent).toContain('Card fields are deliberately excluded');
    expect(compiled.textContent).toContain('Frontend depth, honest boundaries');
    expect(links).toContain('View live demo');
    expect(links).toContain('View source');
  });

  it('renders the four-view product walkthrough', () => {
    const fixture = TestBed.createComponent(VertexStorefrontCaseStudyComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.gallery figure')).toHaveLength(4);
  });
});
