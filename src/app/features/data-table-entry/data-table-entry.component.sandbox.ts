import { sandboxOf } from 'angular-playground';
import { SharedModule } from './../../shared/shared.module';

import { DataTableEntryComponent } from './../data-table-entry/data-table-entry.component';
import { DataTableComponent } from './../data-table/data-table.component';

import { utils } from './../data-table/data-table.utils';

const testBed = new utils();

export default sandboxOf(DataTableEntryComponent, {
  imports: [SharedModule],
  declarations: [DataTableComponent]
}).add('Dynamic Data Table Material with Data Entry', {
  template: `<app-data-table-entry [modelGroup]="modelGroup"></app-data-table-entry>`,
  context: {
    modelGroup: testBed.modelGroup,
    models: testBed.models
  }
});
