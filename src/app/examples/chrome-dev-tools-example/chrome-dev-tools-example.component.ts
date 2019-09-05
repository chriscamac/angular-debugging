import { Component } from '@angular/core';
import { IExample } from '../model/examples.library';

export const chromeDevToolsExample: IExample = {
    title: 'chrome dev tools',
    description:
        'did you know that chrome dev tools can do step line debugging of your angular app?',
    route: 'chrome-dev-tools',
};

@Component({
    templateUrl: './chrome-dev-tools-example.component.html',
})
export class ChromeDevToolsExampleComponent {
    constructor() {}

    /**
     * debugger statement section
     */

    debuggerStatement(): void {
        console.clear();

        const someObject = {
            name: 'Jim',
            title: 'Master of the Universe',
        };

        debugger;

        someObject.name = 'Bob';

        console.log('someObject: ', { ...someObject });
    }

}
