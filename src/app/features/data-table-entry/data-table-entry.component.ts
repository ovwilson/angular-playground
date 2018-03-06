import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data-table-entry',
  templateUrl: './data-table-entry.component.html',
  styles: [
    `
      .mat-column-select { overflow: visible; }
      .mat-table { overflow: auto; max-height:500px }
    `
  ]
})
export class DataTableEntryComponent implements OnInit {
  modelForm: FormGroup;
  _modelGroup: any[];

  @Input()
  set formGroup(data: FormGroup) {
    this.modelForm = data;
  }

  @Input()
  set modelGroup(data: any[]) {
    this._modelGroup = data;
  }

  get modelGroup() {
    return this._modelGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  createForm() {
    this.modelForm = this.fb.group({
      firstName: '',
      lastName: ''
    });
  }
}
