import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromUtils from './admin.utils';
import * as fromData from './admin.data';

import { Schema, Entity, FieldDef, ContentType } from './models/model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styles: [`.header{background-color:#1C2841;color:#C5D1EB}`]
})

export class AdminComponent {

    testBed: any = new fromUtils.AdminSandbox();
    schemas: Entity<Schema[]> = fromData.schemas;
    fieldDefs: Entity<FieldDef[]> = fromData.fieldDefs;
    contentTypes: ContentType[];

    constructor() {
        this.contentTypes = this.testBed.contentTypes;
    }

}