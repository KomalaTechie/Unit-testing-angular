import { ComponentFixture, TestBed, getTestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { PracticeComponent } from './practice.component';
import { By } from '@angular/platform-browser';
import { PracticeService, url } from './practice.service';
import { StudentDataRef, ActorRef } from './practice.component';
import { of } from 'rxjs';
import { StudentData } from './studentData';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { tick } from '@angular/core/testing';

// const mockData = {
//   "users": [
//     {
//       "id": 1,
//       "firstName": "Emily",
//       "lastName": "Johnson",
//       "maidenName": "Smith",
//       "age": 28
//     },
//   ],
//   "total": 1,
//   "skip": 0,
//   "limit": 1
// }
let mockActors = [
  {
      id: 1,
      name: "Marlon Brando",
      birth_year: 1924,
      death_year: 2004,
      nationality: "American",
      known_for: [
          "The Godfather",
          "A Streetcar Named Desire",
          "On the Waterfront"
      ],
      awards: [
          "Oscar",
          "Golden Globe"
      ],
      biography: "Marlon Brando was an American actor and one of the most influential performers in the history of film. He is widely regarded as one of the greatest actors of all time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/220px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
  }
  ]
describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;
  let service : any;
  let servicSpy = jasmine.createSpyObj('PracticeService', ['getStudentList', 'getActors']);
  let button:HTMLElement;
  let httpClient: HttpClient;
  let httpTestControl: HttpTestingController

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [PracticeComponent, HttpClientTestingModule],
      providers: [{ provide: PracticeService, useValue: servicSpy  }]
      // providers: [PracticeService]
    }).compileComponents().then(()=> {
      fixture = TestBed.createComponent(PracticeComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(PracticeService) as jasmine.SpyObj<PracticeService>;;
      httpTestControl = TestBed.inject(HttpTestingController)
      fixture.detectChanges();
      button = fixture.debugElement.nativeElement.querySelector('button')
     
      servicSpy.getStudentList();
      servicSpy.getActors();
      })
    }));

    afterEach(() => {
      httpTestControl.verify();
    });


    it('should display name ', () => {
      expect(component).toBeTruthy();
      expect(component.usernamevalue).toEqual('Accion')
    });
  
    it('should display name on click of a button function call', () => {
      expect(component.usernamevalue).toEqual('Accion')
      button.click();
      component.buttonClicked('accionlabs');
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('h2');
      expect(element.textContent).toEqual('Ators ...');
      
    });
  
    it('should create spy on service method', () => {
      button.click();
      service.getStudentList.and.returnValue(of(StudentData))
      component.students.subscribe((res)=> {
        expect(StudentData).toBe(res);
        expect(StudentData.length).toEqual(14);
      })
    });

    it('should get actors called', async() => {
        button.click();
        fixture.detectChanges();
        expect(servicSpy).toBeDefined();
        fixture.detectChanges();
        expect(servicSpy.getActors).toHaveBeenCalled();
      });

      it('should get actors List', async() => {
        button.click();
        fixture.detectChanges();
        servicSpy.getActors.and.returnValue(of(mockActors));
        component.actors.subscribe(res=> {
          expect(mockActors.length).toEqual(1);
        })
      });
  });

