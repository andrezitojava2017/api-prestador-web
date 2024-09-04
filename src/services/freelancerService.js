import { ListAllServices } from "../controller/services/servicesController.js";
import {
  freelancerRespositorie,
  getAllFreelanceRepositorie,
  getFreelancerInfo,
  pisPasepExist,
} from "../repositories/freelancerRespositorie.js";
import {
  insertNewService,
  ListService,
} from "../repositories/serviceRepositorie.js";

const freelancerService = async (nome, pispasep) => {
  try {
    const data = await freelancerRespositorie(nome.toUpperCase(), pispasep);
    return data;
  } catch (error) {
    throw error;
  }
};

const getInfoFreelancerService = async (search) => {
  try {
    const rs = await getFreelancerInfo(search);
    return rs;
  } catch (error) {
    throw error;
  }
};

const getAllFreelanceService = async () => {
  try {
    const rs = await getAllFreelanceRepositorie();
    return rs;
  } catch (error) {
    throw error;
  }
};


const listServicesByCompetence = async (referencia) => {
  try {
    const list = await ListService(referencia);
    return list;
  } catch (error) {
    throw error;
  }
};


const insertService = async (
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
    throw error;
  }
};
export {
  freelancerService,
  listServicesByCompetence,
  insertService,
  getInfoFreelancerService,
  getAllFreelanceService,
};
