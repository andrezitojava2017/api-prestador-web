import { ListService } from "../../repositories/serviceRepositorie.js";

export const ListAllServices = async (req, res) => {
  const { referencia } = req.body;
  try {

    const service = await ListService(referencia);
    return res.status(200).json({ data: service });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
