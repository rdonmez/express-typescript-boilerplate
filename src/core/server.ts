import Express from "express";
import { router } from "../routers";

interface ServerOptions {
    port: number,
    apiPrefix: string
}

export class Server {
    private readonly app = Express();
    private readonly port: number;

    constructor(options: ServerOptions) {
        const {port} = options;
        this.port = port;
    }

    async start() : Promise<void> {
        this.app.use(Express.json())
        this.app.use(Express.urlencoded({ extended: true }))
        this.app.use("/", router)
        this.app.listen(this.port, ()=> {
            console.log(`Listening port: ${this.port}`);
        })
    }
}