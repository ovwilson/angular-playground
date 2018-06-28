import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-table-entry',
  templateUrl: './data-table-entry.component.html',
  styles: [
    `
      .mat-column-select {
        overflow: visible;
      }
      .mat-table {
        overflow: auto;
        max-height: 500px;
      }
    `
  ]
})
export class DataTableEntryComponent implements OnInit {
  modelForm: FormGroup;
  _modelGroup: any[];
  _models: any[];

  @Input()
  set formGroup(data: FormGroup) {
    this.modelForm = data;
  }

  @Input()
  set modelGroup(data: any[]) {
    this._modelGroup = data;
  }

  @Input()
  set models(data: any[]) {
    this._models = data;
  }

  get modelGroup() {
    return this._modelGroup;
  }

  get models() {
    return this._models;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.modelForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  add() {
    this.models = [this.modelForm.value, ...this.models];
    this.reset();
  }

  reset() {
    this.modelForm.reset();
  }
}
