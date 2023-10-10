import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    UserAddComponent,
    ListUsersComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class UsersModule { }
