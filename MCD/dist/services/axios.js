"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sgpsAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const SGPS_URL = 'http://localhsot:5001';
exports.sgpsAPI = axios_1.default.create({
    baseURL: SGPS_URL,
});
