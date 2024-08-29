import {
  insertNewService,
  ListService,
} from "../../repositories/serviceRepositorie.js";
import { insertService, listServicesByCompetence } from "../../services/freelancerService.js";

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
    sal_base,
    cod_lotacao,
    pis_pasep,
  } = req.body;
  try {
   const service = await insertService(
      competencia,
      empenho,
      fonte,
      inss_retido,
      inss_patronal,
      sal_base,
      cod_lotacao,
      pis_pasep
    );

    return res.status(200).json({message:'Serviço salvo com sucesso' , data:service})
   
  } catch (error) {
    throw error;
  }
};
