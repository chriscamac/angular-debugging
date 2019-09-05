import { Component } from '@angular/core';
import { IExample } from '../model/examples.library';

export const ngProbeExample: IExample = {
    title: 'ng.probe',
    description:
        'inspect the values of your components in real time',
    route: 'ng-probe',
};

@Component({
    templateUrl: './ng-probe-example.component.html',
})
export class NgProbeExampleComponent {
    someNumber = 42;
    someOtherNumber = 1;
    someString = 'I am a string';
    someObject;

    constructor() {}

    /**
     * ng probe section
     */

    setSomeObjectsValue(): void {
        debugger;
        this.someObject = {
            name: 'Jim',
            title: 'Master of the Universe',
        };
    }

}
