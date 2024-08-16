import jwt from 'jsonwebtoken';

export const verifyAuthorization = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: 'Token não localizado' });

  jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
    if (error) return res.status(401).json({ message: 'Token invalido!' });
    next();
  });
};
