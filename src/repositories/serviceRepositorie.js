import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ListService = async (referencia) => {
  try {
    const services = await prisma.tbl_servicos.findMany({
      include: {
        pessoa: {
          select: {
            nome: true,
            pis_pasep: true
          }
        }
      },
      where:{
        competencia: referencia
      }
    });

    return services;
  } catch (error) {
    console.warn("Ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao recuperar lista de serviços");
  } finally {
    await prisma.$disconnect();
  }
};

export { ListService };
