"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urls_1 = __importDefault(require("./urls"));
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = (0, express_1.Router)();
const micServiceProxy = createProxyMiddleware({
    target: `${urls_1.default.MIC_SERVICE.URL}/${urls_1.default.MIC_SERVICE.VERSION}`,
    changeOrigin: true,
    pathRewrite: {
        [`^/service`]: '',
    },
});
const mcdServiceProxy = createProxyMiddleware({
    target: `${urls_1.default.MCD_SERVICE.URL}/${urls_1.default.MCD_SERVICE.VERSION}`,
    changeOrigin: true,
    pathRewrite: {
        [`^/service`]: '',
    },
});
const msaServiceProxy = createProxyMiddleware({
    target: `${urls_1.default.MSA_SERVICE.URL}/${urls_1.default.MSA_SERVICE.VERSION}`,
    changeOrigin: true,
    pathRewrite: {
        [`^/service`]: '',
    },
});
const mgeServiceProxy = createProxyMiddleware({
    target: `${urls_1.default.MGE_SERVICE.URL}/${urls_1.default.MGE_SERVICE.VERSION}`,
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
routes.get('/api-gateway/health', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json();
}));
exports.default = routes;
