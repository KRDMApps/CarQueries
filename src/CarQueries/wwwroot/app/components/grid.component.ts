import {Component} from '@angular/core';
import "../models";

@Component({
    selector: 'grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: './components/grid.html'
})
export class GridComponent {
    columns: Array<Column>;
    rows: Array<any>;
    sorter: Sorter;
    constructor() {
        this.sorter = new Sorter();
    }
    sort(key) {
        this.sorter.sort(key, this.rows);
    }
}

export class Column {
    name: string;
    descr: string;
    constructor(name, descr) {
        this.name = name;
        this.descr = descr;
    }
}

export class Sorter {
    direction: number;
    key: string;
    constructor() {
        this.direction = 1;
    }
    sort(key, data) {
        if (this.key === key) {
            this.direction = this.direction * -1;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort((a, b) => {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return 1 * this.direction;
            }
            else {
                return -1 * this.direction;
            }
        });
    }
}