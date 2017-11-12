import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { HomeComponent } from './home/home.component';
import { FlowComponent } from './flow/flow.component';
import { StageNodeComponent } from './@shared/stage-node/stage-node.component';
import { NewStageComponent } from './@shared/new-stage/new-stage.component';
import { StageEditorComponent } from './@shared/stage-editor/stage-editor.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerStageComponent } from './customer-stage/customer-stage.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    HomeComponent,
    FlowComponent,
    StageNodeComponent,
    NewStageComponent,
    StageEditorComponent,
    CustomerComponent,
    CustomerStageComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
