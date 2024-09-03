import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ListService = async (referencia) => {
  try {
    const services = await prisma.tbl_servicos.findMany({
      include: {
        pessoa: {
          select: {
            nome: true,
            pis_pasep: true,
          },
        },
        lotacao:{
          select:{
            descricao:true
          }
        }
      },
      where: {
        competencia: referencia,
      },
    });
    
    return services;
  } catch (error) {
    console.warn("Ocorreu um erro ", error);
    throw new Error("Ocorreu um erro ao recuperar lista de serviços");
  } finally {
    await prisma.$disconnect();
  }
};

const insertNewService = async (
  competencia,
  empenho,
  fonte,
  inss_retido,
  inss_patronal,
  sal_base,
  cod_lotacao,
  pis_pasep
) => {

  try {
    const service = await prisma.tbl_servicos.create({
      data:{
        competencia: competencia,
        empenho: empenho,
        fonte:fonte,
        cod_dotacao: cod_lotacao,
        inss_retido: inss_retido,
        inss_patronal: inss_patronal,
        salario_base: sal_base,
        pisPasep: pis_pasep
      }
    })

    return service;

  } catch (error) {

    console.log(error)
    throw new Error('Ocorreu um erro ao tentar inserir novo serviço')

  }finally {
    await prisma.$disconnect();
  }
};

export { ListService, insertNewService };
