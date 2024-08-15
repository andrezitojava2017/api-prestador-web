import bcrypt from "bcrypt";

export const encryption = async(value) => {
  try {
    const saltRounds = 10;
    const result = bcrypt.hashSync(value, saltRounds);

    return result;
  } catch (error) {
    console.warn("Ocorreu um erro na criptografia", error);
    throw new Error("Ocorreu um erro na criptografia");
  }
};

export const decryption = (value, hash) => {
  try {
    const pass = bcrypt.compareSync(value, hash);
    return pass;
  } catch (error) {
    throw new Error("Ocorreu um erro na descriptografia");
  }
};
