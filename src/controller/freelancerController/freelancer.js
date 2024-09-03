import { getFreelancerInfo } from "../../repositories/freelancerRespositorie.js";
import {
  freelancerService,
  getAllFreelanceService,
  getInfoFreelancerService,
} from "../../services/freelancerService.js";

export const insertFreelancer = async (req, res, next) => {
  const { nome, pispasep } = req.body;
  try {
    const data = await freelancerService(nome, pispasep);
    res
      .status(200)
      .json({ message: "Prestador salvo com sucesso", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInfoFreelancer = async (req, res) => {
  const search = req.params.data;
  console.log(search);
  
  try {
    const list = await getInfoFreelancerService(search);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllFreelancer = async (req, res) => {
 
  try {
    const list = await getAllFreelanceService();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};