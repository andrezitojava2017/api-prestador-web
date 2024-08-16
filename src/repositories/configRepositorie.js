import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertSecretary = async (descricao, codigo) => {
  try {
    const rs = await prisma.tbl_lotacao.create({
      data: {
        codigo_dotacao: codigo,
        descricao: descricao,
      },
    });

    return rs;
  } catch (error) {
    console.warn('ocorreu um erro ', error);
    throw new Error('Ocorreu um erro ao tentar lançar nova secretaria!');
  } finally {
    await prisma.$disconnect();
  }
};

const insertTax = async (max_recolher, segurado, patronal, competencia) => {
  try {
    const rs = await prisma.tbl_tributo.create({
      data: {
        competencia: competencia,
        max_recolhimento: max_recolher,
        base_patronal:patronal,
        base_segurado: segurado
      },
    });

    return rs;
  } catch (error) {
    console.warn('ocorreu um erro ', error);
    throw new Error('Ocorreu um erro ao tentar lançar tributo!');
  } finally {
    await prisma.$disconnect();
  }
};

export { insertSecretary, insertTax};
