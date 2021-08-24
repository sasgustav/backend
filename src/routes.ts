import express from 'express';

import CarController from './controllers/CarController';

const routes = express.Router();


const carsController = new CarController;

routes.get('/cars', carsController.index);
routes.get('/cars/:id', carsController.show);
routes.post('/cars', carsController.create);
routes.put('/cars/:id', carsController.update);
routes.delete('/cars/:id', carsController.delete);


export default routes;