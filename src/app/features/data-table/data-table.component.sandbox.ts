import { sandboxOf } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared/shared.module';

import { Observable } from 'rxjs/Observable';
import { utils } from './data-table.utils';
import { DataTableComponent } from './data-table.component';

const testBed = new utils();

export default sandboxOf(DataTableComponent, {
    imports: [SharedModule]
})
    .add('Dynamic Data Table Material', {
        template: `<app-data-table [models]="models" [modelGroup]="modelGroup"></app-data-table>`,
        context: {
            models: testBed.models,
            modelGroup: testBed.modelGroup
        }
    });
