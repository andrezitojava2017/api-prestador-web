import { pisPasepExist } from "../repositories/freelancerRespositorie.js";

export const verificationPisPasepExist = async (req, res, next) => {
  const { pis_pasep } = req.body;
  try {
    const rs = await pisPasepExist(pis_pasep);

    if (rs.length != 0) {
     return res.status(401).json({ message: "Pis/Pasep já cadastrado", data: rs });
    }

    next();
  } catch (error) {
    console.log("Erro ocorrido ", error);
    res.status(500).json({ error: error.message });
  }
};
