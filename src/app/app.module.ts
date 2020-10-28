import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
 
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    ExcelsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
    , InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
