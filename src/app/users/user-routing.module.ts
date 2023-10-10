import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component:ListUsersComponent
      },{
        path: 'add',
        component: UserAddComponent,
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
