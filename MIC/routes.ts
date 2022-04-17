import { Router, Request, Response } from "express";
import { deleteAssociated, getAssociateds, postAssociated, putAssociated } from "./sgps_routines";


const routes: Router = Router();

routes.get('/associateds', getAssociateds);
routes.post('/associateds', postAssociated);
routes.put('/associateds/:id', putAssociated);
routes.delete('/associateds/:id', deleteAssociated);

routes.get('/health', async (req: Request, res: Response) => {
  return res.status(200).json();
});

export default routes;