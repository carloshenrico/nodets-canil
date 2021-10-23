import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index';

dotenv.config();


const server = express();


server.set('view engine', 'mst');
server.set('views', path.join(__dirname, 'views'));
server.engine('mst', mustache(__dirname+'/views/partials', '.mst'));


server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);


server.use((req: express.Request, res: express.Response)=>{
    res.render('pages/404');
})

server.listen(process.env.PORT);