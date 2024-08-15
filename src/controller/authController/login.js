import jwt from 'jsonwebtoken';

export const loginController = async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const token = jwt.sign(
      { 'e-mail': email, name: name, password: password },
      process.env.SECRET_KEY,
      {
        expiresIn: 3600,
      }
    );
    res.status(200).send({ token });
  } catch (error) {
    console.warn(error);
    res.status(401).send(error.errorMessage);
  }
};

export const addNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    console.log('dados de usuario ', req.body);
    return res
      .status(200)
      .json({ message: 'Usuario adicionado com sucesso!!' });
  } catch (error) {
    console.warn('ocorreu um erro ', error);
    return res.status(500).json({ error: 'Ocorreu um erro' });
  }
};
