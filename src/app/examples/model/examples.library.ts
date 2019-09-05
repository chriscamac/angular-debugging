import { consoleLogExample } from '../console-log-example/console-log-example.component';
import { chromeDevToolsExample } from '../chrome-dev-tools-example/chrome-dev-tools-example.component';
import { ngProbeExample } from '../ng-probe-example/ng-probe-example.component';

export interface IExample {
    title: string;
    description: string;
    route: string;
}

export const examples: IExample[] = [
    consoleLogExample,
    chromeDevToolsExample,
    ngProbeExample,
];
