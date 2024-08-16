import { freelancerRespositorie } from '../repositories/freelancerRespositorie.js';

const freelancerService = async (nome, pispasep) => {
  try {
    const data = await freelancerRespositorie(nome.toUpperCase(), pispasep);
    return data;
  } catch (error) {
    throw error;
  }
};

export { freelancerService };
