import { Router } from 'express';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';
import {
  addNewUser,
  loginController,
} from '../controller/authController/login.js';
import { addNewSecretary, updateSecretaryController, updateTaxController } from '../controller/configController/config.js';
import { getAllFreelancer, getInfoFreelancer, insertFreelancer, updateFreelancer } from '../controller/freelancerController/freelancer.js';
import { getAllListSecretary, getAllListTaxService, insertTaxService } from '../services/configService.js';
import { listServicesByCompetence } from '../services/freelancerService.js';
import { getRelatorioGuiasMensal, insertServiceController, ListAllServices, updateServiceController } from '../controller/services/servicesController.js';
import { verificationPisPasepExist } from '../middleware/freelancer.js';
import { relatorioGuiasMensal } from '../repositories/serviceRepositorie.js';

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
config.get('/inss/list',verifyAuthorization, getAllListTaxService)
config.get('/lotation/',verifyAuthorization, getAllListSecretary)

/**Rotas para prestador */
freelancer.post('/new', verifyAuthorization, verificationPisPasepExist, insertFreelancer );
freelancer.post('/service', verifyAuthorization, listServicesByCompetence);
freelancer.post('/service/new', verifyAuthorization, verificationPisPasepExist, insertServiceController);
freelancer.post('/service/list', verifyAuthorization, ListAllServices)
freelancer.patch('/service/update/', verifyAuthorization, updateServiceController)
freelancer.get('/list/:data', verifyAuthorization, getInfoFreelancer)
freelancer.get('/list/', verifyAuthorization, getAllFreelancer)
freelancer.put('/update/',verifyAuthorization, verifyAuthorization, updateFreelancer)
freelancer.get('/rel/:referencia/:ano', verifyAuthorization, getRelatorioGuiasMensal)

/**Rotas de Testes */
geral.get('/', test);
