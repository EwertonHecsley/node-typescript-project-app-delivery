import { Router } from 'express';
import { CreateClienteController } from './model/client/useCase/create_client/CreateCliente.controller';
import { AuthClientController } from './model/account/auth/Auth.client.controller';

const rota = Router();

const createClienteController = new CreateClienteController();
const authenticateClientController = new AuthClientController();

rota.post('/client', createClienteController.handle);
rota.post('/login', authenticateClientController.handle)

export default rota;