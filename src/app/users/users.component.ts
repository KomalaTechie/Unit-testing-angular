import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


  ngOnInit() {
    // this.getUsers('');
  }

  // getUsers(val: any) {
  //   this.service.getUsers(val).subscribe((res)=> {console.log(res, val)})
  // }

}
