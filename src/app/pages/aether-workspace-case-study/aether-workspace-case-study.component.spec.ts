import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AetherWorkspaceCaseStudyComponent } from './aether-workspace-case-study.component';

describe('AetherWorkspaceCaseStudyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AetherWorkspaceCaseStudyComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('presents the privacy architecture and recruiter actions', () => {
    const fixture = TestBed.createComponent(AetherWorkspaceCaseStudyComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.textContent?.trim(),
    );

    expect(compiled.querySelector('h1')?.textContent).toContain('Aether Workspace');
    expect(compiled.textContent).toContain('Private by architecture');
    expect(compiled.textContent).toContain('Grounding must be inspectable');
    expect(compiled.textContent).toContain('39');
    expect(compiled.textContent).toContain('0 POSTs');
    expect(compiled.textContent).toContain('focused local product');
    expect(links).toContain('Open live workspace');
    expect(links).toContain('View source');
  });

  it('renders the complete four-image product walkthrough', () => {
    const fixture = TestBed.createComponent(AetherWorkspaceCaseStudyComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.gallery figure')).toHaveLength(4);
  });
});
