import { insertSecretary } from '../repositories/configRepositorie.js';

const insertService = async (descricao, codigo) => {
  try {
    const rs = await insertSecretary(descricao, codigo);
    return rs;
  } catch (error) {
    throw error;
  }
};

export { insertService };
