import express from 'express';

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;
import { route as noticiasRoute } from './routes/noticia.route.js';
import { route as periodistasRoute } from './routes/periodista.route.js';

app.use('/noticias', noticiasRoute);
app.use('/periodista', periodistasRoute);

//mongodb config
import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost/demoMongo';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose error: '));

app.listen(port, () => {
  console.log('listening on port ' + port);
});
