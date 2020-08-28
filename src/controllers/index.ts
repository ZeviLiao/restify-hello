import { PingController } from './ping';
import { HelloController } from './hello';

export const CONTROLLERS = [
    new PingController(),
    new HelloController()
];
