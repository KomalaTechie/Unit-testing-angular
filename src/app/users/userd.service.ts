import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDService {
http = inject(HttpClient);

getUsers(value: string) {
  return this.http.get(`https://dummyjson.com/users/search?q=${value}`).pipe(
    map((data: any) => data['users'])
  );
}
}
