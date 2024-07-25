import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component'; 
import { CoursesComponent } from './courses.component';

export const routes: Routes = [
    {path: '', component: CoursesComponent},
    { path: 'Docs', component: CoursesComponent },
    { path: 'Tutorials', component:  CoursesComponent}
];
