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
const sgps_routines_1 = require("./sgps_routines");
const routes = (0, express_1.Router)();
routes.get('/associateds', sgps_routines_1.getAssociateds);
routes.post('/associateds', sgps_routines_1.postAssociated);
routes.put('/associateds/:id', sgps_routines_1.putAssociated);
routes.delete('/associateds/:id', sgps_routines_1.deleteAssociated);
routes.get('/health', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json();
}));
exports.default = routes;
