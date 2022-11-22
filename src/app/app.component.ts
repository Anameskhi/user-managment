import { Component } from '@angular/core';
import { IUser, UserStatus, UserRole } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-managment';
  users:IUser[] = [
    {
      fullName: 'Anuka',
      role: 'user',
      status: 'active'
    }
  ]
  

  addUser(user: IUser){
    this.users.push(user)
  }
  changeStatus(status: UserStatus, index: number){
    this.users[index].status = status
  }
  changeRole(role: UserRole, index: number){
    this.users[index].role = role
  }
}
