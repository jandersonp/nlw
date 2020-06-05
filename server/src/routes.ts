import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itenscontroller = new ItemsController();

// Listagem de items
routes.get('/items', itenscontroller.index);

// Cria ponto de coleta
routes.post('/points', pointsController.create);

// Listar pontos por filtro
routes.get('/points', pointsController.index);

// Listar um ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes;
