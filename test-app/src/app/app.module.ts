import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableEditorModule } from './table-editor/table-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
