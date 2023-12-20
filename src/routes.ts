import { Router } from 'express';
import { CreateClienteController } from './model/client/useCase/create_client/CreateCliente.controller';
import { AuthClientController } from './model/account/auth/Auth.client.controller';
import { CreateDeliveryManController } from './model/account/deliveryman/useCases/createDeliveryman/CreateDeliveryMan.controller';

const rota = Router();

const createClienteController = new CreateClienteController();
const authenticateClientController = new AuthClientController();
const createDeliveryManController = new CreateDeliveryManController();

rota.post('/client', createClienteController.handle);
rota.post('/login', authenticateClientController.handle);
rota.post('/deliveryman', createDeliveryManController.handle);

export default rota;