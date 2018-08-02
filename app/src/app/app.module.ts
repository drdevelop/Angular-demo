import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'


import { Xheader } from './components/xheader/xheader'
import { Xpannel } from './components/xpannel/xpannel'
import { Xfooter } from './components/xfooter/xfooter'
import { HomeComponent } from './home.component'
import { dataGrid } from './components/datagrid/datagrid'
import { DataformComponent } from './components/dataform/dataform.component'
import { Students } from './students'

import { DictionaryService } from './share/dictionary.service'
import { HttpClientService } from './share/httpclient.service';
import { rootRouter } from './share/router'

@NgModule({
  declarations: [
    Xheader,
    Xpannel,
    Xfooter,
    HomeComponent,
    dataGrid,
    Students,
    DataformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    rootRouter
  ],
  providers: [DictionaryService,HttpClientService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
