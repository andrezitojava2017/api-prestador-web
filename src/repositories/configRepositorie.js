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
  }
};

export { insertSecretary };
