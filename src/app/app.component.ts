import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PracticeComponent } from './practice/practice.component'
import { UsersComponent } from './users/users.component';
import { Router } from '@angular/router';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule ,PracticeComponent,
     UsersComponent, CustomPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'People';
  titleHas: any;
  file: number = 100000;
  page:any = 'Appcomponent';

  constructor(public router: Router){}
  ngOnInit() {
    this.titleHas = {msg: 'No changes yet - ' + this.page}
    this.router.navigateByUrl('/about');
  }

  displayMessage(msg: string = 'hi') {
   return this.titleHas.msg = msg;
  }
}
