import { sandboxOf } from 'angular-playground';
import { SharedModule } from './../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { DataTableComponent } from './../../features/data-table/data-table.component';
import { DataTableEntryComponent } from './../../features/data-table-entry/data-table-entry.component';

export default sandboxOf(AdminComponent, {
  imports: [SharedModule],
  declarations: [AdminComponent, DataTableComponent, DataTableEntryComponent]
}).add('Admin Component', {
  template: `<app-admin></app-admin>`
});
