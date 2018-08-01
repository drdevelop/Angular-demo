import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HightlightDirective } from './gz1802/directives/hightlight.directive';
import { DatagridComponent } from './gz1802/components/datagrid/datagrid.component';
import { BookComponent } from './gz1802/components/book/book.component';
import { StudentsComponent } from './gz1802/components/students/students.component';

import {DictionaryService} from './gz1802/services/dictionary.service'
import {HttpClientService} from './gz1802/services/httpclient.service'

import {RangePipe} from './gz1802/pipes/range.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    DatagridComponent,
    BookComponent,
    StudentsComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DictionaryService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
