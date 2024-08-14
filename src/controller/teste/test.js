import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const test = async (req, res, next) => {
  try {

    const allPosts = await prisma.post.findMany();

    console.log(allPosts);
    return res.status(200).json({ data: allPosts });

  } catch (error) {
    console.warn(error);
    return res.status(500).send("Erro interno no servidor")
    
  }finally{

    await prisma.$disconnect()
  }
};
