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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AssociatedController_1 = require("./controller/AssociatedController");
const ServiceProviderController_1 = require("./controller/ServiceProviderController");
const routes = (0, express_1.Router)();
routes.get('/associateds', AssociatedController_1.getAssociateds);
routes.post('/associateds', AssociatedController_1.postAssociated);
routes.put('/associateds/:id', AssociatedController_1.putAssociated);
routes.delete('/associateds/:id', AssociatedController_1.deleteAssociated);
routes.get('/serviceProviders', ServiceProviderController_1.getServiceProvider);
routes.post('/serviceProviders', ServiceProviderController_1.postServiceProvider);
routes.put('/serviceProviders/:id', ServiceProviderController_1.putServiceProvider);
routes.delete('/serviceProviders/:id', ServiceProviderController_1.deleteServiceProvider);
routes.get('/health', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json();
}));
exports.default = routes;
