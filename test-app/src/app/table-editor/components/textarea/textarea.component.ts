import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableEditorService } from '../../table-editor.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {

  control = new FormControl<string>('')

  constructor(private tableEditorService: TableEditorService) {}

  ngOnInit(): void {
    // console.log(this.tableEditorService.storedData)
    this.control.setValue(this.tableEditorService.storedData)
  }

  continue(): void {
    this.tableEditorService.parse(this.control.value as string)
  }
}
