import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const freelancerRespositorie = async (nome, pispasep) => {
  try {
    const rs = await prisma.tb_pessoas.create({
      data: {
        nome: nome,
        pis_pasep: pispasep,
      },
    });

    return rs;
  } catch (error) {
    console.warn('Ocorreu um erro ', error);
    throw new Error('Ocorreu um erro ao adicionar novo prestador');
  } finally {
    await prisma.$disconnect();
  }
};

export { freelancerRespositorie };
