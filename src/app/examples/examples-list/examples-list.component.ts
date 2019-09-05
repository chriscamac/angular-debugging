import { Component, OnInit } from '@angular/core';
import { examples } from '../model/examples.library';

@Component({
    templateUrl: './examples-list.component.html',
})
export class ExamplesListComponent implements OnInit {
    examples = examples;

    constructor() {}

    ngOnInit() {}
}
