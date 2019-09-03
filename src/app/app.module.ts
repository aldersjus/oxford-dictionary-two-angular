import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DictionaryResultComponent } from './bottom/dictionary-result/dictionary-result.component';
import { SearchComponent } from './top/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryResultComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
