import { Component, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-data-table-entry',
    templateUrl: './data-table-entry.component.html',
    styles: [`
        .mat-column-select { overflow: visible; }
        .mat-table { overflow: auto; max-height:500px }`]
})

export class DataTableEntryComponent {

    _modelGroup: any[];

    @Input() set modelGroup(data: any[]) {
        this._modelGroup = data;
    }

    get modelGroup(){
        return this._modelGroup;
    }


}
