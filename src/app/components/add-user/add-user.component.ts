import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser,UserRole,UserStatus } from 'src/app/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent{
  // users:IUser[] = []
  @Output() addUSer: EventEmitter<IUser>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 addUserHandler(fullName:string, role: string, status: string){

   this.addUSer.emit({
     fullName: fullName,
     role: role as UserRole,
     status: status as UserStatus
   })

 }

  
   }

