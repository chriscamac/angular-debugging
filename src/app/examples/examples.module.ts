import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleLogExampleComponent } from './console-log-example/console-log-example.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ChromeDevToolsExampleComponent } from './chrome-dev-tools-example/chrome-dev-tools-example.component';
import { NgProbeExampleComponent } from './ng-probe-example/ng-probe-example.component';

@NgModule({
    declarations: [ExamplesListComponent, ConsoleLogExampleComponent, ChromeDevToolsExampleComponent, NgProbeExampleComponent],
    imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
