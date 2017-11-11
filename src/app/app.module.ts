import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { HomeComponent } from './home/home.component';
import { FlowComponent } from './flow/flow.component';
import { StageNodeComponent } from './@shared/stage-node/stage-node.component';
import { NewStageComponent } from './@shared/new-stage/new-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    HomeComponent,
    FlowComponent,
    StageNodeComponent,
    NewStageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
