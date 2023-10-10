import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboadComponent } from './components/dashboad/dashboad.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboadComponent,
    UserManagementComponent,
    OrderManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
