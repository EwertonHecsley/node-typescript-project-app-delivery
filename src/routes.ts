import { Router } from 'express';
import { CreateClienteController } from './model/client/useCase/create_client/CreateCliente.controller';

const rota = Router();

const createClienteController = new CreateClienteController();

rota.post('/client', createClienteController.handle);

export default rota;