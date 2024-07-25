import { Component, OnInit, Injectable, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentDataRef, ActorRef } from './practice.component';
import { Observable, of, map } from 'rxjs';
import { StudentData } from './studentData';
import { HttpClient } from '@angular/common/http';


export const url = 'https://freetestapi.com/api/v1/actors';

@Injectable()
export class PracticeService {
    constructor(public http: HttpClient){}
    students$: Observable<StudentDataRef[]>;

    // getUsers(value: string) {
    // return this.http.get(`https://dummyjson.com/users/search?q=${value}`).pipe(
    //     map((data: any) => data['users'])
    // );
    // }
    
    getStudentList() {
        this.students$ = of(StudentData);
        return  this.students$;
    }

    getActors() {
        return this.http.get<ActorRef[]>(url);
    }
}
