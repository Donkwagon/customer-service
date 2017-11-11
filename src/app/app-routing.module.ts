
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//////////////////////////////////////////////////////////////////////////////////////

import { HomeComponent } from './home/home.component';
import { FlowComponent } from './flow/flow.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'f/:id', component: FlowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
