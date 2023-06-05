import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableEditorService } from './table-editor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableEditorComponent {

  parsedData$: Observable<Object[]> = this.tableEditorService.parsedData$

  constructor(private tableEditorService: TableEditorService) {}
}
