import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboadComponent } from './components/dashboad/dashboad.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {
    path:'admin',
    children:[
      {path:'',component:AdminComponent},
      {path:'dashboard',component:DashboadComponent},
      {path:'order',component:OrderManagementComponent},
      {path:'user-management',component:UserManagementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
