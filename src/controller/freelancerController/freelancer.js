import { freelancerService } from '../../services/freelancerService.js';

export const insertFreelancer = async (req, res, next) => {
  const { nome, pispasep } = req.body;
  try {
    const data = await freelancerService(nome, pispasep);
    res
      .status(200)
      .json({ message: 'Prestador salvo com sucesso', data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
