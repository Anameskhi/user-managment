import { Component } from '@angular/core';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-managment';
  users:IUser[] = []

  addUser(event: IUser){
    this.users.push(event)
  }
}
