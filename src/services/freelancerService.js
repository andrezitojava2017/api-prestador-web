import { ListAllServices } from "../controller/services/servicesController.js";
import { freelancerRespositorie } from "../repositories/freelancerRespositorie.js";
import { insertNewService } from "../repositories/serviceRepositorie.js";

const freelancerService = async (nome, pispasep) => {
  try {
    const data = await freelancerRespositorie(nome.toUpperCase(), pispasep);
    return data;
  } catch (error) {
    throw error;
  }
};

const listServicesByCompetence = async (req, res, next) => {
  try {
    await ListAllServices(req, res);
  } catch (error) {
    throw error;
  }
};

const insertService = async (competencia,
  empenho,
  fonte,
  inss_retido,
  inss_patronal,
  sal_base,
  cod_lotacao,
  pis_pasep)=>{
try {
  const service = await insertNewService(
    competencia,
    empenho,
    fonte,
    inss_retido,
    inss_patronal,
    sal_base,
    cod_lotacao,
    pis_pasep
  );
return service;

} catch (error) {
  throw error
}
  
}
export { freelancerService, listServicesByCompetence, insertService };
