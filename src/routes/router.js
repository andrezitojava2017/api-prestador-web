import { Router } from 'express';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';
import {
  addNewUser,
  loginController,
} from '../controller/authController/login.js';
import { addNewSecretary } from '../controller/configController/config.js';

export const login = Router();
export const config = Router();
export const geral = Router();

/**Rotas de Auth */
login.post('/', loginController);
login.post('/add', verifyAuthorization, addNewUser);

config.post('/add', verifyAuthorization, addNewSecretary);

/**Rotas de Testes */
geral.get('/', test);
