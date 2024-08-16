import { insertService } from '../../services/configService.js';

export const addNewSecretary = async (req, res, next) => {
  const { descricao, codigo } = req.body;

  try {
    const data = await insertService(descricao, parseInt(codigo));

    return res
      .status(200)
      .json({ message: 'Secretaria adicionada com sucesso!!', data: data });
  } catch (error) {
    console.warn('Ocorreu um erro ', error);
    return res.status(500).json({ error: error.message });
  }
};
