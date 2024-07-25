import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PracticeService } from './practice.service';
import { Observable, of } from 'rxjs';
import { StudentData } from './studentData';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export const url = 'https://freetestapi.com/api/v1/actors';

export interface StudentDataRef {
  name: string,
  gender: string,
  physics: number,
  maths: number,
  english: number
}

export interface ActorRef {
  id: number,
  name: string,
  birth_year: number,
  death_year:number,
  nationality:string,
  known_for:[],
  awards:[],
  biography:string,
  image:string
}


@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AsyncPipe, HttpClientModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
  providers:[PracticeService]
})

export class PracticeComponent implements OnInit{
  title: string = 'komala';
  usernamevalue: string = "Accion";
  textEntered: boolean = false;
  students: Observable<StudentDataRef[]>;
  actors: Observable<ActorRef[]>;

  constructor(private practiceService: PracticeService, public http: HttpClient){}
  ngOnInit() {
  }

  buttonClicked(val:string) {
    this.textEntered = true
    this.students = this.practiceService.getStudentList();
    this.actors = this.practiceService.getActors();
  }
}
