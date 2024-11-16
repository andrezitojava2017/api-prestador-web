import { PrismaClient } from "@prisma/client";

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
    console.warn("Ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao adicionar novo prestador");
  } finally {
    await prisma.$disconnect();
  }
};

const getAllFreelanceRepositorie = async () => {
  try {
    const rs = await prisma.tb_pessoas.findMany();

    return rs;
  } catch (error) {
    console.log("Erro ocorrido ", error);
    throw new Error("Ocorreu um erro ao tentar recupera dados do prestador");
  } finally {
    await prisma.$disconnect();
  }
};

const getFreelancerInfo = async (search) => {
  try {
    const rs = await prisma.tb_pessoas.findMany({
      where: {
        nome: {
          contains: search,
        },
      },
    });

    return rs;
  } catch (error) {
    console.log("Erro ocorrido ", error);
    throw new Error("Ocorreu um erro ao tentar recupera dados do prestador");
  } finally {
    await prisma.$disconnect();
  }
};

const pisPasepExist = async (value) => {
  try {
    const rs = await prisma.tb_pessoas.findMany({
      where: {
        pis_pasep: value,
      },
    });

    return rs;
  } catch (error) {
    console.log("Erro ocorrido ", error);
    throw new Error("Ocorreu um erro ao tentar recupera dados do prestador");
  } finally {
    await prisma.$disconnect();
  }
};

const updateFreelanceRepositorie = async (freelance) => {
  try {
    const updateUsers = await prisma.tb_pessoas.updateMany({
      where: {
        pis_pasep: freelance.pis_pasep,
      },
      data: {
        ...freelance,
      },
    });

    return;
  } catch (error) {
    throw new Error("Não foi possivel atualizar registro de prestador");
  }
};

export {
  freelancerRespositorie,
  getFreelancerInfo,
  getAllFreelanceRepositorie,
  pisPasepExist,
  updateFreelanceRepositorie,
};
