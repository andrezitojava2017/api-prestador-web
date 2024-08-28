import { Router } from 'express';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';
import {
  addNewUser,
  loginController,
} from '../controller/authController/login.js';
import { addNewSecretary, updateSecretaryController, updateTaxController } from '../controller/configController/config.js';
import { insertFreelancer } from '../controller/freelancerController/freelancer.js';
import { getAllListSecretary, getAllListTaxService, insertTaxService } from '../services/configService.js';
import { listServicesByCompetence } from '../services/freelancerService.js';
import { insertServiceController } from '../controller/services/servicesController.js';

export const login = Router();
export const config = Router();
export const geral = Router();
export const freelancer = Router();

/**Rotas de Auth */
login.post('/', loginController);
login.post('/add',verifyAuthorization, addNewUser);

/**Rotas de configuração */
config.post('/add', verifyAuthorization, addNewSecretary);
config.post('/update', verifyAuthorization, updateSecretaryController)
config.post('/tax/new',verifyAuthorization, insertTaxService)
config.post('/tax/update', verifyAuthorization, updateTaxController)
config.get('/inss/list', getAllListTaxService)
config.get('/lotation/', getAllListSecretary)

/**Rotas para prestador */
freelancer.post('/new', verifyAuthorization, insertFreelancer);
freelancer.post('/service', listServicesByCompetence);
freelancer.post('/service/new', insertServiceController);

/**Rotas de Testes */
geral.get('/', test);
