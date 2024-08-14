import app from './app.js';
import { config } from 'dotenv-safe';
config();

const PORT = 3000;


app.listen(PORT, () => {
    console.log("servidor em execução!!!");
  });
  