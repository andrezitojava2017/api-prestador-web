import { Router } from 'express';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';
import {
  addNewUser,
  loginController,
} from '../controller/authController/login.js';
import { addNewSecretary } from '../controller/configController/config.js';
import { insertFreelancer } from '../controller/freelancerController/freelancer.js';

export const login = Router();
export const config = Router();
export const geral = Router();
export const freelancer = Router();

/**Rotas de Auth */
login.post('/', loginController);
login.post('/add', verifyAuthorization, addNewUser);

/**Rotas de configuração */
config.post('/add', verifyAuthorization, addNewSecretary);

/**Rotas para prestador */
freelancer.post('/new', verifyAuthorization, insertFreelancer);

/**Rotas de Testes */
geral.get('/', test);
