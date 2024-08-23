import jwt from 'jsonwebtoken';
import { addUserService, SignInService } from '../../services/authService.js';

export const loginController = async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const user = await SignInService(email, password);

    const token = jwt.sign(
      { 'e-mail': email, name: name },
      process.env.SECRET_KEY,
      {
        expiresIn: 3600,
      }
    );

    console.log('token gerado: ', token);
    
    res.status(200).json({ token });
  } catch (error) {
    console.warn(error);
    res.status(401).json({ error: error.message });
  }
};

export const addNewUser = async (req, res, next) => {
  const { nome, email, password } = req.body;
  try {
    await addUserService(email, nome, password);
    return res
      .status(200)
      .json({ message: 'Usuario adicionado com sucesso!!' });
  } catch (error) {
    console.warn('ocorreu um erro ', error);
    return res.status(500).json({ error: error.message });
  }
};
