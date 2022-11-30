import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser,UserRole,UserStatus } from 'src/app/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  
})
export class AddUserComponent{
  @Output() addUSer: EventEmitter<IUser>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 addUserHandler(form: NgForm){
   if(form.invalid) return;
   const {fullName,role} = form.value

   form.form.markAllAsTouched()


   this.addUSer.emit({
     fullName: fullName,
     role: role as UserRole,
     status: 'active'
     
   })
   form.reset()
 }
}

