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
exports.deleteServiceProvider = exports.putServiceProvider = exports.postServiceProvider = exports.getServiceProvider = void 0;
const sgpsAPI_1 = require("../services/sgpsAPI");
function getServiceProvider(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield sgpsAPI_1.sgpsAPI.get("/serviceProviders");
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.getServiceProvider = getServiceProvider;
function postServiceProvider(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const serviceProvider = request.body;
            const { data } = yield sgpsAPI_1.sgpsAPI.post('/serviceProviders', serviceProvider);
            return response.status(201).json(data);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.postServiceProvider = postServiceProvider;
function putServiceProvider(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const serviceProvider = request.body;
            const { data } = yield sgpsAPI_1.sgpsAPI.put(`/serviceProviders/${id}`, serviceProvider);
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.putServiceProvider = putServiceProvider;
function deleteServiceProvider(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            yield sgpsAPI_1.sgpsAPI.delete(`/serviceProviders/${id}`);
            return response.status(200).json();
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.deleteServiceProvider = deleteServiceProvider;
