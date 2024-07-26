// import { TestBed } from '@angular/core/testing';
// // import { HttpTestingController , HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing'
// import { UserService } from './users.service';
// // import { HttpClient } from '@angular/common/http';
// // import { provideHttpClient, HttpClientModule } from '@angular/common/http';

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

// describe('DataService', () => {
//   let service: UserService;
// //   let httpTesting: HttpTestingController;
// //   let httpClient: HttpClient;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//         // imports: [HttpClientTestingModule, HttpClientModule ],
//       providers: [
//         // provideHttpClient(),
//         // provideHttpClientTesting(),
//         UserService,
//         // HttpClient
//       ]
//     });
//     service = TestBed.inject(UserService);
//     // httpTesting = TestBed.inject(HttpTestingController);
//     // httpClient = TestBed.inject(HttpClient);
//   });

//   afterEach(() => {
//     // httpTesting.verify();
//   })

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

// //   it('should get all users', () => {
// //     service.getUsers('').subscribe((users: any) => {
// //       expect(users).toBeTruthy();
// //       expect(users.length).toBe(1);
// //     })
// //     const mockReq = httpTesting.expectOne('https://dummyjson.com/users/search?q=');
// //     mockReq.flush(mockData);
// //   })

// //   it('should get all users', () => {
// //     service.getUsers('').subscribe((users: any) => {
// //       expect(users).toBeTruthy();
// //       expect(users.length).toBe(1);
// //     })
// //     const mockReq = httpTesting.expectOne('https://dummyjson.com/users/search?q=');
// //     mockReq.flush(mockData);
// //   })
// });
