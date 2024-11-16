import { PrismaClient } from "@prisma/client";

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
    console.warn("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao tentar lançar nova secretaria!");
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
        base_patronal: patronal,
        base_segurado: segurado,
      },
    });

    return rs;
  } catch (error) {
    console.warn("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao tentar lançar tributo!");
  } finally {
    await prisma.$disconnect();
  }
};

const updateTax = async (id, max_recolher, segurado, patronal, competencia) => {
  try {
    const updateTax = await prisma.tbl_tributo.update({
      where: {
        id: id,
      },
      data: {
        competencia: competencia,
        max_recolhimento: max_recolher,
        base_patronal: patronal,
        base_segurado: segurado,
      },
    });

    return updateTax;
  } catch (error) {
    console.warn("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao tentar atualizar tributo!");
  } finally {
    await prisma.$disconnect();
  }
};

const updateSecretary = async (codigo, descricao) => {
  try {
    const updateSec = await prisma.tbl_lotacao.update({
      where: {
        codigo_dotacao: codigo,
      },
      data: {
        descricao: descricao,
      },
    });

    return updateSec;
  } catch (error) {
    console.warn("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao tentar atualizar secretaria!");
  } finally {
    await prisma.$disconnect();
  }
};

const getListTax = async () => {
  try {
    const list = await prisma.tbl_tributo.findMany();

    return list;
  } catch (error) {
    console.warn("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao tentar recuperar lista de tributos");
  } finally {
    await prisma.$disconnect();
  }
};

const getListSecretary = async () => {
  try {
    const rs = await prisma.tbl_lotacao.findMany();
    return rs;

  } catch (error) {
    console.log("ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao recuperar lista de secretarias!");
  } finally {
    await prisma.$disconnect();
  }
};
export { insertSecretary, insertTax, updateTax, updateSecretary, getListTax, getListSecretary };
