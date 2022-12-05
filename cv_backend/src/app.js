import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

// incializacion de la app  
const app = express();
const port = process.env.PORT || 3000;

// rutas del proyecto 
const __dirname = dirname(fileURLToPath(import.meta.url));

// configuracion de ficheros staticos 
app.use(express.static(join(__dirname, 'public')));
app.use("/animejs/",express.static( join(__dirname,'/node_modules/animejs/lib')));

// configuracion de platillas
app.set('views',join(__dirname,'views'));
app.set('view engine', 'ejs');

// rutas de la app 
app.use(router);


app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}`);
});