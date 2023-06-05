import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TableEditorService {

  readonly parsedData$ = new BehaviorSubject<Object[]>([])

  storedData: string = '[{"name":"alex", "year":123}, {"name":"alex1", "year":1232}]'

  constructor() { }

  parse(value: string): void {
    try {
      console.log(JSON.parse(value));

      this.parsedData$.next(JSON.parse(value))
    } catch (error) {
      console.error(error)
    }
  }

  push(): void {
    this.storedData = JSON.stringify(this.parsedData$.getValue())
    this.parsedData$.next([])
  }
}
