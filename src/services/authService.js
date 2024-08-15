import { CreateUser, SignIn } from "../repositories/authRepositorie.js";
import { decryption, encryption } from "../utils/cripto.js";

const addUserService = async (email, name, password) => {
  try {
    let encryptedPassword = await encryption(password);
    const user = await CreateUser(name, email, encryptedPassword);
    return user;
  } catch (error) {
    throw error;
  }
};

const SignInService = async (email, password) => {
  try {

    const rs = await SignIn(email); 
    if(rs === null) throw new Error("Usuario não encontrado")

    const user = decryption(password, rs.password)  
    if(!user) throw new Error("Usuario ou senha invalidos")
     
    return;

  } catch (error) {
    throw error;
  }
};

export { addUserService, SignInService };
