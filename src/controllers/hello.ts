import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from 'restify';
import { helloService } from '../services/hello';


export class HelloController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('hello', this.list.bind(this));
        httpServer.get('helloasync', this.helloasync.bind(this));
    }

    private list(req: Request, res: Response): any {
        res.send(helloService.sayHello());
    }

    public async helloasync(req: Request, res: Response): Promise<any> {
        res.send(await helloService.sayHelloAsync())
    }
}