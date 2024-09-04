import { Router } from 'express';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';
import {
  addNewUser,
  loginController,
} from '../controller/authController/login.js';
import { addNewSecretary, updateSecretaryController, updateTaxController } from '../controller/configController/config.js';
import { getAllFreelancer, getInfoFreelancer, insertFreelancer } from '../controller/freelancerController/freelancer.js';
import { getAllListSecretary, getAllListTaxService, insertTaxService } from '../services/configService.js';
import { listServicesByCompetence } from '../services/freelancerService.js';
import { insertServiceController, ListAllServices } from '../controller/services/servicesController.js';
import { verificationPisPasepExist } from '../middleware/freelancer.js';

export const login = Router();
export const config = Router();
export const geral = Router();
export const freelancer = Router();

/**Rotas de Auth */
login.post('/', loginController);
login.post('/add',addNewUser);

/**Rotas de configuração */
config.post('/add', verifyAuthorization, addNewSecretary);
config.post('/update', verifyAuthorization, updateSecretaryController)
config.post('/tax/new',verifyAuthorization, insertTaxService)
config.post('/tax/update', verifyAuthorization, updateTaxController)
config.get('/inss/list', getAllListTaxService)
config.get('/lotation/', getAllListSecretary)

/**Rotas para prestador */
freelancer.post('/new', verifyAuthorization, verificationPisPasepExist, insertFreelancer );
freelancer.post('/service', listServicesByCompetence);
freelancer.post('/service/new', insertServiceController);
freelancer.post('/service/list', ListAllServices)
freelancer.get('/list/:data', getInfoFreelancer)
freelancer.get('/list/', getAllFreelancer)

/**Rotas de Testes */
geral.get('/', test);
