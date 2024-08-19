import { ListAllServices } from "../controller/services/servicesController.js";
import { freelancerRespositorie } from "../repositories/freelancerRespositorie.js";

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
export { freelancerService, listServicesByCompetence };
