import app from "./app.js";
import { config } from "dotenv-safe";
config();

const PORT = 3005;

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.clear(); // Limpa o console para destacar os novos logs
  console.log("=============================================");
  console.log("🚀 SERVIDOR EM EXECUÇÃO COM SUCESSO!");
  console.log("=============================================");
  console.log(`📡 URL Local:   http://localhost:${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
  console.log(`⚙️  Ambiente:     ${process.env.NODE_ENV || "development"}`);
  console.log(`⏰ Horário:      ${new Date().toLocaleString("pt-BR")}`);
  console.log("=============================================");
});
