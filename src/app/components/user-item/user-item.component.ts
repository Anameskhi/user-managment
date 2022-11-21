import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, UserStatus } from 'src/app/interfaces';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent{
  @Input() user?: IUser
  @Output() statusChanged:EventEmitter<UserStatus> = new EventEmitter()
  constructor() { }
  
  changeStatus(status: UserStatus){
    this.statusChanged.emit(status)
  }
 
}
