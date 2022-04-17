import { Router, Request, Response } from "express";
import httpProxy from 'express-http-proxy';
import URLs from './urls';
const { createProxyMiddleware } = require('http-proxy-middleware');

const routes: Router = Router();

const micServiceProxy = createProxyMiddleware({
  target: `${URLs.MIC_SERVICE.URL}/${URLs.MIC_SERVICE.VERSION}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/service`]: '',
  },
});

const mcdServiceProxy = createProxyMiddleware({
  target: `${URLs.MCD_SERVICE.URL}/${URLs.MCD_SERVICE.VERSION}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/service`]: '',
  },
});

const msaServiceProxy = createProxyMiddleware({
  target: `${URLs.MSA_SERVICE.URL}/${URLs.MSA_SERVICE.VERSION}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/service`]: '',
  },
});

const mgeServiceProxy = createProxyMiddleware({
  target: `${URLs.MGE_SERVICE.URL}/${URLs.MGE_SERVICE.VERSION}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/service`]: '',
  },
});

routes.use('/service', routes);

routes.get('/MIC/health', micServiceProxy);
routes.get('/MCD/health', mcdServiceProxy);
routes.get('/MSA/health', msaServiceProxy);
routes.get('/MGE/health', mgeServiceProxy);

routes.get('/MIC/associateds', micServiceProxy);
routes.post('/MIC/associateds', micServiceProxy);
routes.put('/MIC/associateds/:id', micServiceProxy);
routes.delete('/MIC/associateds/:id', micServiceProxy);

routes.get('/MIC/serviceProviders', micServiceProxy);
routes.post('/MIC/serviceProviders', micServiceProxy);
routes.put('/MIC/serviceProviders/:id', micServiceProxy);
routes.delete('/MIC/serviceProviders/:id', micServiceProxy);

routes.get('/api-gateway/health', async (req: Request, res: Response) => {
  return res.status(200).json();
});

export default routes;