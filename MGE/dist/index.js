"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 3000;
const API_VERSION = 'v1';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(`/${API_VERSION}`, routes_1.default);
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
