import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ConsoleLogExampleComponent, consoleLogExample } from './console-log-example/console-log-example.component';
import { chromeDevToolsExample, ChromeDevToolsExampleComponent } from './chrome-dev-tools-example/chrome-dev-tools-example.component';
import { NgProbeExampleComponent, ngProbeExample } from './ng-probe-example/ng-probe-example.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesListComponent,
    },
    {
        path: `examples/${consoleLogExample.route}`,
        component: ConsoleLogExampleComponent,
    },
    {
        path: `examples/${chromeDevToolsExample.route}`,
        component: ChromeDevToolsExampleComponent,
    },
    {
        path: `examples/${ngProbeExample.route}`,
        component: NgProbeExampleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}
