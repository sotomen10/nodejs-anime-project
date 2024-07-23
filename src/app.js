import express from 'express'; // Importa Express para crear la aplicación web
import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno
import errorHandler from './middlewares/error.handler.js'; // Importa el manejador de errores
import routerAnime from './routes/animes.js'; // Importa el enrutador para la ruta '/animes'
import routerDirectores from "./routes/directores.js";
import routerStudios from "./routes/studios.js";

const app = express(); // Crea una instancia de la aplicación Express

dotenv.config(); // Carga las variables de entorno desde un archivo .env

const PORT = process.env.PORT || 3010; // Define el puerto de escucha

app.use(express.json()); // Middleware para analizar cuerpos de solicitud JSON

app.use('/animes', routerAnime); // Monta el enrutador para la ruta base '/animes'
app.use("/directores", routerDirectores);
app.use("/studios", routerStudios);

app.use(errorHandler); // Middleware para manejar errores

app.listen(PORT, () => { // Inicia el servidor y escucha en el puerto especificado
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
