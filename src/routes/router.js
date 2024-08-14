import { Router } from 'express';
import { loginController } from '../controller/loginController/login.js';
import { test } from '../controller/teste/test.js';
import { verifyAuthorization } from '../middleware/authorization.js';

export const login = Router();
export const geral = Router();

login.post('/', loginController)

geral.get('/', verifyAuthorization, test)