import { ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from './course.routes';
import { CoursesComponent } from './courses.component';
import { provideRouter } from '@angular/router'; 

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesComponent],
      providers: [ provideRouter(routes)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
