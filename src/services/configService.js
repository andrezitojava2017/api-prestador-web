import {
  insertSecretary,
  insertTax,
} from "../repositories/configRepositorie.js";

const insertService = async (descricao, codigo) => {
  try {
    const rs = await insertSecretary(descricao, codigo);
    return rs;
  } catch (error) {
    throw error;
  }
};

const insertTaxService = async (req, res) => {
  const { max_recolher, segurado, patronal, competencia } = req.body;
  try {
    const rs = await insertTax(max_recolher, segurado, patronal, competencia);
    res
      .status(200)
      .json({ mesage: "Tributos adicionado com sucesso", data: rs });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

export { insertService, insertTaxService };
