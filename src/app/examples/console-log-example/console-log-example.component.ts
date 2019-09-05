import { Component } from '@angular/core';
import { IExample } from '../model/examples.library';

export const consoleLogExample: IExample = {
    title: 'console.log()',
    description: 'good old trusty console.log() can be a great tool',
    route: 'console-log',
};

@Component({
    templateUrl: './console-log-example.component.html',
})
export class ConsoleLogExampleComponent {
    someNumber = 42;
    someOtherNumber = 1;
    someString = 'I am a string';
    someObject;

    constructor() {}

    /**
     * good labeling section
     */

    goodLabeling(): void {
        console.clear();

        console.log(this.someNumber);
        console.log(this.someOtherNumber);

        console.log('someNumber: ', this.someNumber);
        console.log('someOtherNumber: ', this.someOtherNumber);

        console.log({someNumber: this.someNumber});
        console.log({someOtherNumber: this.someOtherNumber});
    }

    /**
     * reference objects section
     */

    referenceObjects(): void {
        console.clear();

        this.someObject = {
            name: 'Jim',
            title: 'Master of the Universe',
        };

        console.log('someObject: ', this.someObject);

        console.log('someObject: ', {...this.someObject}); // or better yet JSON.parse(JSON.stringify(this.someObject))

        this.someObject.name = 'Bob';

    }
}
