import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorListComponent } from './actor-list/actor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
  { path: 'dashborad', component: DashboardComponent },
  { path: 'actor/:id', component: ActorListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }