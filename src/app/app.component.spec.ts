import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser'; 
import { fakeAsync, tick } from '@angular/core/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router = Router;
  let location: Location
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [ provideRouter(routes)]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.inject(Location)
    router: TestBed.inject(Router)// objRouter.initialnavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the People' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('People');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, People');
  });

  it('should show about data on route navigation', () => {
    fixture.detectChanges();
    expect(location.path()).toEqual('/about');
  });

  it('should load courses routes on click of courses link', fakeAsync(() => {
    fixture.detectChanges();
    let link = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    link[0].nativeElement.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toEqual('/courses');
  }));
});
