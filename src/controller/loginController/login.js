
import jwt from 'jsonwebtoken'


export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
 
  try {
    const token = jwt.sign({ 'e-mail': email, 'nome':'Jederson Andre' }, process.env.SECRET_KEY,{
        expiresIn:3600
    });
    res.status(200).send({token});

  } catch (error) {
    console.warn(error)
    res.status(401).send(error.errorMessage);
  }
};
