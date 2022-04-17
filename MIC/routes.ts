import { Router, Request, Response } from "express";
import { deleteAssociated, getAssociateds, postAssociated, putAssociated } from "./controller/AssociatedController";
import { deleteServiceProvider, getServiceProvider, postServiceProvider, putServiceProvider } from "./controller/ServiceProviderController";


const routes: Router = Router();

routes.get('/associateds', getAssociateds);
routes.post('/associateds', postAssociated);
routes.put('/associateds/:id', putAssociated);
routes.delete('/associateds/:id', deleteAssociated);

routes.get('/serviceProviders', getServiceProvider);
routes.post('/serviceProviders', postServiceProvider);
routes.put('/serviceProviders/:id', putServiceProvider);
routes.delete('/serviceProviders/:id', deleteServiceProvider);

routes.get('/health', async (req: Request, res: Response) => {
  return res.status(200).json();
});

export default routes;