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
  _models:any[];

  @Input() set models(data:any[]){
    this._models = data;
  }

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

  get models(){
    return this._models;
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
