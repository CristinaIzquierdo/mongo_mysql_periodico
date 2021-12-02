import express from 'express';

const route = express.Router();

import * as periodistaController from '../controllers/periodistas.controller.js';

route.get('/', periodistaController.get);

route.post('/', periodistaController.addPeriodista);

export { route };
