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
        lotacao: {
          select: {
            descricao: true,
          },
        },
      },
      where: {
        competencia: referencia,
      },
    });

    // Converta os campos de string para number
    const servicesWithNumber = services.map((service) => ({
      ...service,
      inss_retido: service.inss_retido ? parseFloat(service.inss_retido) : null,
      inss_patronal: service.inss_patronal
        ? parseFloat(service.inss_patronal)
        : null,
      salario_base: service.salario_base
        ? parseFloat(service.salario_base)
        : null,
    }));

    return servicesWithNumber;
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
  salario_base,
  cod_dotacao,
  pis_pasep
) => {
  try {
    const service = await prisma.tbl_servicos.create({
      data: {
        competencia: competencia,
        empenho: empenho,
        fonte: fonte,
        cod_dotacao: cod_dotacao,
        inss_retido: inss_retido,
        inss_patronal: inss_patronal,
        salario_base: salario_base,
        pis_pasep: pis_pasep,
      },
    });

    return service;
  } catch (error) {
    console.log(error);
    throw new Error("Ocorreu um erro ao tentar inserir novo serviço");
  } finally {
    await prisma.$disconnect();
  }
};

const updateServiceRepositorie = async (
  id,
  competencia,
  empenho,
  fonte,
  inss_retido,
  inss_patronal,
  salario_base,
  cod_dotacao
) => {
  try {
    const service = await prisma.tbl_servicos.update({
      where: {
        id: id,
      },
      data: {
        competencia: competencia,
        empenho: empenho,
        fonte: fonte,
        cod_dotacao: cod_dotacao,
        inss_retido: inss_retido,
        inss_patronal: inss_patronal,
        salario_base: salario_base,
      },
    });

    return service;
  } catch (error) {
    console.log(error);
    throw new Error("Ocorreu um erro ao tentar atualizar o serviço");
  } finally {
    await prisma.$disconnect();
  }
};

const relatorioGuiasMensal = async (referencia) => {
  try {
    const resultado = await prisma.$queryRaw`
    SELECT 
        tbl_servicos.competencia,
        tbl_servicos.fonte, 
        tbl_servicos.cod_dotacao,
        tbl_lotacao.descricao,
        CAST(SUM(tbl_servicos.inss_retido) AS FLOAT) AS retido,
        CAST(SUM(tbl_servicos.inss_patronal) AS FLOAT) AS patronal,
        CAST(SUM(tbl_servicos.inss_retido + tbl_servicos.inss_patronal) AS FLOAT) AS total_guia 
    FROM tbl_servicos
    INNER JOIN tbl_lotacao 
        ON tbl_lotacao.codigo_dotacao = tbl_servicos.cod_dotacao
    WHERE tbl_servicos.competencia = ${referencia}
    GROUP BY
        tbl_servicos.competencia,
        tbl_servicos.fonte,
        tbl_lotacao.descricao,
        tbl_servicos.cod_dotacao;
    `;

    return resultado;

    // console.log('resultado com total: ', resultadosComTotal)
    //  console.log('resultado: ', resultado)
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao realizar relatorio");
  } finally {
    await prisma.$disconnect();
  }
};

export {
  ListService,
  insertNewService,
  updateServiceRepositorie,
  relatorioGuiasMensal,
};
