import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromUtils from './admin.utils';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styles: [`.header{background-color:#1C2841;color:#C5D1EB}`]
})

export class AdminComponent {

    testBed: any = new fromUtils.AdminSandbox();
    models: any[] = this.testBed.models;
    modelGroup: any[] = this.testBed.modelGroupChild;

    constructor() {
    }

}