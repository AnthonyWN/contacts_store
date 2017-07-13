import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MyDataService } from './my-data.service';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppComponent,
    MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
