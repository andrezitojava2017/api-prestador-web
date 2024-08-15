export const addNewSecretary = async (req, res, next) => {
  const { descricao, codigo } = req.body;

  try {
    console.log('Dados da secretaria ', req.body);
    return res
      .status(200)
      .json({ message: 'Secretaria adicionada com sucesso!!' });
  } catch (error) {
    console.warn('Ocorreu um erro ', error);
    return res.status(500).json({ error: 'Ocorreu um erro' });
  }
};
