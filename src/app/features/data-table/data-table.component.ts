import { Component, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styles: [`
        .mat-column-select { overflow: visible; }
        .mat-table { overflow: auto; max-height:500px }`]
})

export class DataTableComponent {

    _modelGroup: any[];

    constructor(private renderer: Renderer2) { }

    @Input('models') set models(data: any[]) {
        this.dataSource.data = data;
    }

    @Input('modelGroup') set modelGroup(data: any[]) {
        this._modelGroup = data;
        const columns = data.map(group => group.name);
        columns.length ? columns.unshift('select') : '';
        this.displayedColumns = columns;
    }

    get modelGroup() {
        return this._modelGroup;
    }

    @Output() onEdit = new EventEmitter<any>();

    displayedColumns: any[] = [];
    dataSource: MatTableDataSource<any> = new MatTableDataSource();
    selection = new SelectionModel<any>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    showSingleActions() {
        return this.selection.selected.length > 0 && this.selection.selected.length < 2;
    }

    showMultipleActions() {
        return this.selection.selected.length >= 2;
    }

    onSelect(el: any) { /** Toggles CSS background color to selected row */
        const row = el._elementRef.nativeElement.closest('mat-row');
        el.checked ? this.renderer.addClass(row, 'selected') :
            this.renderer.removeClass(row, 'selected');
    }

    onSelectAll(el: any) { /** Toggles CSS background color to all rows */
        const table = el._elementRef.nativeElement.closest('mat-table');
        const rows = table.querySelectorAll('mat-row');
        el.checked ?
            rows.forEach(row => this.renderer.addClass(row, 'selected')) :
            rows.forEach(row => this.renderer.removeClass(row, 'selected'));
    }

    onFilter(val: any) {
        this.modelGroup = this.modelGroup.map(model => model.name === val.name ?
            Object.assign({}, model, { visible: !model.visible }) : model);

        this.dataSource.filter = '';
    }



}
