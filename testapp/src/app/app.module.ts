import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ListtasksComponent } from './listtasks/listtasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatetaskComponent,
    ListtasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
