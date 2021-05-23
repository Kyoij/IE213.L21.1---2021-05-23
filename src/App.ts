import { notFound } from './middlewares';
import Express, { Application, json, urlencoded } from 'express';
import { HomeRoute, FlowerRoute } from './routes';
import path from 'path';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';

export default class Server {
    private _app: Application;
    constructor(private _port: number) {
        this._app = Express();
        this.settings();
        this.middlewareInputs();
        this.routes();
        this.middlewareOutput();
    }

    private settings() {
        this._app.set('view engine', 'ejs');
        this._app.set('views', process.cwd() + '/src/views');
        mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () =>
            console.log('✅ connected to mongoDB')
        );
    }
    private middlewareInputs() {
        this._app.use(json());
        this._app.use(urlencoded({ extended: true }));
        this._app.use('/images', Express.static(path.join(__dirname, 'static')));
    }
    private routes() {
        this._app.use('/flower', FlowerRoute);
        this._app.use('/', HomeRoute);
    }
    private middlewareOutput() {
        this._app.use(notFound);
    }

    public start() {
        this._app.listen(this._port, () => console.log(`✅ server is running on http://localhost:${this._port}/`));
    }
}
