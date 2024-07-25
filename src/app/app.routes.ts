import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';CoursesComponent
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: 'courses', 
        loadChildren: () => import('./courses/course.routes').then(x => x.routes)
    },
    { path: 'about', component:  AboutComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})  

export class AppRoute {
    

}