import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserData } from './userData'; 
export const url = 'https://freetestapi.com/api/v1/actors';
import { map } from 'rxjs';

@Injectable()
export  class UserService  {
    constructor(public http: HttpClient){}

    getUsers(val: any) {
        // return this.http.get<UserData[]>(`https://dummyjson.com/users/search?q=${val}`).pipe(map((res: any) => res['users']))
    }


}