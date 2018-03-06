import { sandboxOf } from 'angular-playground';
import { utils } from './data-table.utils';
import { DataTableComponent } from './data-table.component';
import { SharedModule } from './../../shared/shared.module';

const testBed = new utils();

export default sandboxOf(DataTableComponent, {
  imports: [SharedModule]
}).add('Dynamic Data Table Material', {
  template: `<app-data-table [models]="models" [modelGroup]="modelGroup"></app-data-table>`,
  context: {
    models: testBed.models,
    modelGroup: testBed.modelGroup
  }
});
