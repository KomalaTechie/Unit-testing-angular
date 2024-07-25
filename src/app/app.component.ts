import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PracticeComponent } from './practice/practice.component'
import { UsersComponent } from './users/users.component';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule ,PracticeComponent,
     UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'People';
  titleHas = 'komala'

  constructor(public router: Router){}
  ngOnInit() {
    this.router.navigateByUrl('/about');
  }
}
