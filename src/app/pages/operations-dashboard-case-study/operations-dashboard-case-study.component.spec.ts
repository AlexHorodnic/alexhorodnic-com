import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OperationsDashboardCaseStudyComponent } from './operations-dashboard-case-study.component';

describe('OperationsDashboardCaseStudyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsDashboardCaseStudyComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('presents the project context and primary recruiter actions', () => {
    const fixture = TestBed.createComponent(OperationsDashboardCaseStudyComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.textContent?.trim(),
    );

    expect(compiled.querySelector('h1')?.textContent).toContain('Operations Dashboard');
    expect(compiled.textContent).toContain('One workflow, two interaction models');
    expect(compiled.textContent).toContain('What this project is and is not');
    expect(links).toContain('View live demo');
    expect(links).toContain('View source');
  });

  it('renders the complete five-image product walkthrough', () => {
    const fixture = TestBed.createComponent(OperationsDashboardCaseStudyComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.gallery figure')).toHaveLength(5);
  });
});
