import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { provideHttpClient } from '@angular/common/http';
import { UserDService } from './userd.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

const mockData = {
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28
    },
  ],
  "total": 1,
  "skip": 0,
  "limit": 1
}

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: UserDService;
  let httpTesting: HttpTestingController;
  let objRouter = Router;
  let location: Location
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserDService);
    httpTesting = TestBed.inject(HttpTestingController);
    location = TestBed.inject(Location)
    // objRouter.initialnavigation();
  });

  afterEach(() => {
    httpTesting.verify();
  })

  it('should create user component', () => {
    expect(component).toBeTruthy();
    console.log('kooom',location)
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getUsers('').subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(1);
    })
    const mockReq = httpTesting.expectOne('https://dummyjson.com/users/search?q=');
    mockReq.flush(mockData);
  })
});
