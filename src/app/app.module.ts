import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddUserComponent,UserItemComponent,ButtonComponent} from './components';
import { RolePermissionDirective } from './directives/role-permission.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserItemComponent,
    ButtonComponent,
    RolePermissionDirective,
    DropdownDirective,
    DropdownComponent,
    DropdownItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
