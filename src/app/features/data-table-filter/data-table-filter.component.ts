import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModelGroup } from './../data-table/data-table';

import { of } from 'rxjs/observable/of';

interface Values {
  [id: string]: string[];
}

@Component({
  selector: 'app-data-table-filter-details',

  template: `<mat-nav-list>
  <a mat-list-item *ngFor="let item of values">{{item}}</a>
</mat-nav-list>`
})

export class DataTableFilterDetailsComponent {

  @Input() filter: string;
  @Input() values: string[];

}

@Component({
  selector: 'app-data-table-filter',
  templateUrl: './data-table-filter.component.html',
  styles: [
    `
      .mat-column-select { overflow: visible; }
      .mat-table { overflow: auto; max-height:500px }
    `
  ]
})

export class DataTableFilterComponent implements OnInit {

  _modelGroup: ModelGroup[];
  _models: any[];

  @Input() set models(data: any[]) {
    this._models = data;
  }
  @Input() set modelGroup(data: ModelGroup[]) {
    this._modelGroup = data;
  }

  get models() {
    return this._models;
  }

  get modelGroup() {
    return this._modelGroup;
  }

  filterGroup$: Observable<ModelGroup[]> = of<ModelGroup[]>([]);
  values: Values = {};
  constructor() { }

  ngOnInit() {
    this.filterGroup$ = of(this.modelGroup.filter(val => val.filter));
    this.setValues();
  }

  setValues() {
    const keys = this.modelGroup.filter(group => group.filter).map(group => group.name);

    keys.forEach(key => {
      const vals = this.models.map(model => model[key]);
      this.values[key] = this.groupBy(vals);
    });

  }

  groupBy(vals: string[]) {
    return vals.sort().reduce((accumulator, currentValue) => {
      const length = accumulator.length;
      if (length === 0 || accumulator[length - 1] !== currentValue) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
  }

}
