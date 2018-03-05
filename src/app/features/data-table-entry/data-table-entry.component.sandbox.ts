import { sandboxOf } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared/shared.module';

import { Observable } from 'rxjs/Observable';

import { DataTableEntryComponent } from './../data-table-entry/data-table-entry.component';

import { DataTableComponent } from './../data-table/data-table.component';

import { utils } from './../data-table/data-table.utils';

const testBed = new utils();

export default sandboxOf(DataTableEntryComponent, {
    imports: [SharedModule]
})
    .add('Dynamic Data Table Material with Data Entry', {
        template: `<app-data-table-entry [modelGroup]="modelGroup"></app-data-table-entry>`,
        context: {
            modelGroup: testBed.modelGroup
        }
    });
