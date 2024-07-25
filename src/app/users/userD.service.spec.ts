import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { provideHttpClient } from '@angular/common/http';
import { UserDService } from './userd.service';

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

describe('UserD Service', () => {
    let service: UserDService;
    let httpTesting: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideHttpClient(),
          provideHttpClientTesting()
        ]
      });
      service = TestBed.inject(UserDService);
      httpTesting = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTesting.verify();
    })
  
    it('should has to be created', () => {
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
  