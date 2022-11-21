import { Component } from '@angular/core';
import { IUser, UserStatus } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-managment';
  users:IUser[] = []
  

  addUser(user: IUser){
    this.users.push(user)
  }
  changeStatus(status: UserStatus, index: number){
    this.users[index].status = status
  }
}
