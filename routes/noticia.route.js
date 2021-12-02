import express from 'express';

const route = express.Router();

import * as noticiasController from '../controllers/noticias.controllers.js';

route.get('/', noticiasController.get);
route.get('/:id', noticiasController.getById);

route.post('/', noticiasController.add);

export { route };
