import Server from './App';
import { PORT } from './config';

const server = new Server(PORT);

server.start();
