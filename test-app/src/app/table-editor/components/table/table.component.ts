import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableEditorService } from '../../table-editor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  parsedData$: Observable<Object[]> = this.tableEditorService.parsedData$

  constructor(private tableEditorService: TableEditorService) {}

  push(): void {
    this.tableEditorService.push()
  }

  onChange(obj: Object, key: string, event: Event): void {
    // @ts-ignore
    obj[key] = event.target!.value!;
  }
}
