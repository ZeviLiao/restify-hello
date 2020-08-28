import { DatabaseProvider } from "../database";


export class HelloService {
    public sayHello(): any {
        return {
            hello: 'zevi'
        }
    }

    public async sayHelloAsync(): Promise<any> {
        let data = await Promise.resolve({
            hello: 'zevi async'
        })
        return data
    }
}

export const helloService = new HelloService();