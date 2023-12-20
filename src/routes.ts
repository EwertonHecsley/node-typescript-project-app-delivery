import { Router } from 'express';
import { CreateClienteController } from './model/client/useCase/create_client/CreateCliente.controller';
import { AuthClientController } from './model/account/auth/authtenticateClient/Auth.client.controller';
import { CreateDeliveryManController } from './model/deliveryman/useCases/createDeliveryman/CreateDeliveryMan.controller';
import { AuthenticadeDeliveryManController } from './model/account/auth/authenticateDeliveryMan/Auth.deliveryMan.controller';

const rota = Router();

const createClienteController = new CreateClienteController();
const authenticateClientController = new AuthClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authtenticateDeliveryManController = new AuthenticadeDeliveryManController();

rota.post('/client', createClienteController.handle);
rota.post('/login/deliveryman', authtenticateDeliveryManController.handle);
rota.post('/login', authenticateClientController.handle);
rota.post('/deliveryman', createDeliveryManController.handle);

export default rota;