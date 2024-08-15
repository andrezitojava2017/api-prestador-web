import { PrismaClient } from "@prisma/client";
import { decryption } from "../utils/cripto.js";

const prisma = new PrismaClient();

const SignIn = async (email) => {
   try {
    const user = await prisma.tbl_usuario.findFirst({
        where:{
            email:email,
        }
    })
    return user;

   } catch (error) {

    console.warn('Erro no login ', error);
    throw new Error("Ocorreu um erro de Login")

   } finally{
    await prisma.$disconnect();
   }
};

const CreateUser = async (name, email, password) => {
  try {
    const user = await prisma.tbl_usuario.create({
      data: {
        email: email,
        password: password,
        nome: name,
      },
    });

    return user;
  } catch (error) {
    console.warn("Erro", error);
    throw error;
    
  } finally {
    await prisma.$disconnect();
  }
};

export { CreateUser, SignIn };
