import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', component: DashboardComponent,
    children : [
      {   path: 'user',   component: UserComponent   },
      {   path: 'group',   component: GroupComponent   }
    ]
  }
];

@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModuleModule { }
