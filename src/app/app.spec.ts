import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    const localStorageMock = {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
      clear: () => undefined,
    };

    Object.defineProperty(globalThis, 'localStorage', {
      value: localStorageMock,
      configurable: true,
    });

    Object.defineProperty(globalThis, 'scrollTo', {
      value: () => undefined,
      configurable: true,
    });

    Object.defineProperty(globalThis, 'IntersectionObserver', {
      value: class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
      },
      configurable: true,
    });

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render portfolio heading and contact form', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Alex Horodnic');
    expect(compiled.querySelector('.contact-form')?.textContent).toContain('Send message');
  });
});
