import { sandboxOf } from 'angular-playground';
import { SharedModule } from './../../shared/shared.module';

import { DataTableFilterComponent, DataTableFilterDetailsComponent } from './../data-table-filter/data-table-filter.component';
import { DataTableComponent } from './../data-table/data-table.component';

import { utils } from './../data-table/data-table.utils';

const testBed = new utils();

export default sandboxOf(DataTableFilterComponent, {
  imports: [SharedModule],
  declarations: [DataTableComponent, DataTableFilterDetailsComponent]
}).add('Dynamic Data Table Material with Filter', {
  template: `<app-data-table-filter [modelGroup]="modelGroup" [models]="models"></app-data-table-filter>`,
  context: {
    modelGroup: testBed.modelGroup,
    models: testBed.models
  }
});
