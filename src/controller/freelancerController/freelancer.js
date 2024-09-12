import {
  freelancerService,
  getAllFreelanceService,
  getInfoFreelancerService,
  updateFreelanceService,
} from "../../services/freelancerService.js";

export const insertFreelancer = async (req, res) => {
  const { nome, pis_pasep } = req.body;
  try {
    const data = await freelancerService(nome, pis_pasep);
    res
      .status(200)
      .json({ message: "Prestador salvo com sucesso", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInfoFreelancer = async (req, res) => {
  const search = req.params.data;

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

export const updateFreelancer = async (req, res) => {
  try {
    const { pis_pasep, nome } = req.body;
    const rs = await updateFreelanceService({
      pis_pasep: pis_pasep,
      nome: nome,
    });

    return res.status(200).json({ message: "Prestador Atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
