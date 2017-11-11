
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//////////////////////////////////////////////////////////////////////////////////////

import { HomeComponent } from './home/home.component';
import { FlowComponent } from './flow/flow.component';
import { StageComponent } from './stage/stage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'f/:id', component: FlowComponent, children: [
    { path: ':stageId', component: StageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
