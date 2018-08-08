import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter, map } from 'rxjs/operators';
import * as fromData from './admin.data';

import { Entity, ModelAttribute, Schema } from './models/model';
import { ContentType } from './models/contentType';
import { Rule } from './models/rule';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styles: [`
        .header { background-color:#1C2841; color:#C5D1EB; }
        .mat-pseudo-checkbox { display:none !important; }
    `]
})

export class AdminComponent {

    keys$: Observable<string[]> = of([]);
    contentKeys$: Observable<string[]> = of([]);
    data$: Observable<Entity<Schema[], ModelAttribute[]>> = of(fromData.data);

    constructor() {
        this.keys$ = of(Object.keys(fromData.data).filter(key => key !== 'Schema').sort());
        this.contentKeys$ = of(Object.keys(fromData.data).filter(key => key !== 'ContentType').sort());

       //  this.data$ = of(fromData.data).pipe(
       //     map(d => d === 'ContentType' ? d : d )
       //  ); 
         
         //.pipe(map(d => d.title === 'Rule' ?
         //  Object.assign({}, d, { json: this.populate('Rule', 20) }) : d)));
        // //  this.data.entities['ContentType'] = this.populate('ContentType', 30);
        //  this.models = fromData.attributes.entities['ContentType'];
    }

    populate(name: string, quantity: number) {
        const records: any[] = [];
        for (let i = 0; i < quantity; i++) {
            records.push(Object.assign({}, fromData.data[name].seed()));
        }
        return records;
    }
}

