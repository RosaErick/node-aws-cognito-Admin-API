import express from 'express';
import cors from 'cors';


class App{
    constructor(){
        this.server = express();

        this.middlewares();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
    }

}



export default new App().server;