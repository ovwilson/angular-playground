import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent, PlaygroundCommonModule } from 'angular-playground';
import { DataTableComponent } from './features/data-table/data-table.component';
import { DataTableEntryComponent } from './features/data-table-entry/data-table-entry.component';
import { DataTableFilterComponent, DataTableFilterDetailsComponent } from './features/data-table-filter/data-table-filter.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlaygroundCommonModule,
    SharedModule
  ],
  declarations: [DataTableComponent, DataTableEntryComponent, DataTableFilterDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
