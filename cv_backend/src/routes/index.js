import { Router } from "express";
import  {PortafolioController}  from "../controller/PortafolioController.js";

const router = Router();

 router.get('/',
    PortafolioController.getIndex
 );

export default router;