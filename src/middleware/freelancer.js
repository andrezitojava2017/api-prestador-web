import { pisPasepExist } from "../repositories/freelancerRespositorie.js";

export const verificationPisPasepExist = async (req, res, next) => {
 

  try {
    const { pis_pasep } = req.body; // tem q unificar o nome pis_pasep em Iserviços e Iprestadores
    // se existir propriedade update, é atualização de serviço
    // se existir propriedade service, é lançamento de novo serviço
    if (req.headers.update || req.headers.service) {

      const rs = await pisPasepExist(pis_pasep);
      if (rs.length !== 0) {
        return next();
      }
      return res
        .status(401)
        .json({ message: "Não cadastrado", data: "PISPASEP não localizado" });
    } else {
      // condição para CADASTRO DE NOVO PRESTADOR
      const rs = await pisPasepExist(pis_pasep);

      if (rs.length != 0) {
        return res
          .status(401)
          .json({ message: "Pis/Pasep já cadastrado", data: rs });
      }
      return next();
    }
  } catch (error) {
    console.log("Erro ocorrido ", error);
    res.status(500).json({ error: error.message });
  }
};
