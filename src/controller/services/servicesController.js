import {
  insertNewService,
  ListService,
  updateServiceRepositorie,
} from "../../repositories/serviceRepositorie.js";
import {
  insertService,
  listServicesByCompetence,
} from "../../services/freelancerService.js";

export const ListAllServices = async (req, res) => {
  const { referencia } = req.body;
  try {
    const service = await listServicesByCompetence(referencia);
    return res.status(200).json({ data: service });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const insertServiceController = async (req, res) => {
  const {
    competencia,
    empenho,
    fonte,
    inss_retido,
    inss_patronal,
    salario_base,
    cod_dotacao,
    pis_pasep,
  } = req.body;
  try {
    const service = await insertService(
      competencia,
      empenho,
      fonte,
      inss_retido,
      inss_patronal,
      salario_base,
      cod_dotacao,
      pis_pasep
    );

    return res
      .status(200)
      .json({ message: "Serviço salvo com sucesso", data: service });
  } catch (error) {
    throw error;
  }
};

export const updateServiceController = async (req, res) => {
  try {
    const {
      id,
      competencia,
      empenho,
      fonte,
      inss_retido,
      inss_patronal,
      salario_base,
      cod_dotacao,
    } = req.body;

    await updateServiceRepositorie(
      id,
      competencia,
      empenho,
      fonte,
      inss_retido,
      inss_patronal,
      salario_base,
      cod_dotacao,
    );

    res.status(200).json({message: 'Sucesso na atualização!'})

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
