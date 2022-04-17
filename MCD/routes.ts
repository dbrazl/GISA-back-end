import { Router, Request, Response } from "express";

const routes: Router = Router();

routes.get('/health', async (req: Request, res: Response) => {
    return res.status(200).json();
});

export default routes;