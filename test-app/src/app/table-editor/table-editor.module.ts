import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEditorComponent } from './table-editor.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableEditorService } from './table-editor.service';

@NgModule({
  declarations: [
    TableEditorComponent,
    TextareaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TableEditorComponent
  ],
  providers: [TableEditorService]
})

export class TableEditorModule { }
