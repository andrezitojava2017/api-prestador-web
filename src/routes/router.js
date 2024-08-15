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
login.post('/add', addNewUser); // inserir middleware de verificação de token

config.post('/add', addNewSecretary); // inserir middleware de verificação de token

/**Rotas de Testes */
geral.get('/', test);
