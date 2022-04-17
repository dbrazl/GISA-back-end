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
exports.deleteAssociated = exports.putAssociated = exports.postAssociated = exports.getAssociateds = void 0;
const sgpsAPI_1 = require("../services/sgpsAPI");
function getAssociateds(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield sgpsAPI_1.sgpsAPI.get("/associateds");
            const associateds = data.map((associated) => ({
                id: associated.id,
                name: associated.name,
                address: associated.address,
                academicFormation: associated.academicFormation,
                healthCare: associated.healthCare,
                status: associated.status,
                ageGroup: associated.ageGroup,
                healthCareType: associated.healthCareType,
                dentalMedicalPlan: associated.dentalMedicalPlan,
                healthInfo: {
                    medicalAppointments: associated.medicalAppointments,
                    medicalExams: associated.medicalExams,
                    coverage: associated.coverage,
                }
            }));
            return response.status(200).json(associateds);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.getAssociateds = getAssociateds;
function postAssociated(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const requested = request.body;
            const associated = {
                name: requested.name,
                address: requested.address,
                academicFormation: requested.academicFormation,
                healthCare: requested.healthCare,
                status: requested.status,
                ageGroup: requested.ageGroup,
                healthCareType: requested.healthCareType,
                dentalMedicalPlan: requested.dentalMedicalPlan,
                medicalAppointments: requested.healthInfo.medicalAppointments,
                medicalExams: requested.healthInfo.medicalExams,
                coverage: requested.healthInfo.coverage,
            };
            const { data } = yield sgpsAPI_1.sgpsAPI.post('/associateds', associated);
            return response.status(201).json(data);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.postAssociated = postAssociated;
function putAssociated(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const requested = request.body;
            const associated = {
                name: requested.name,
                address: requested.address,
                academicFormation: requested.academicFormation,
                healthCare: requested.healthCare,
                status: requested.status,
                ageGroup: requested.ageGroup,
                healthCareType: requested.healthCareType,
                dentalMedicalPlan: requested.dentalMedicalPlan,
                medicalAppointments: requested.healthInfo.medicalAppointments,
                medicalExams: requested.healthInfo.medicalExams,
                coverage: requested.healthInfo.coverage,
            };
            const { data } = yield sgpsAPI_1.sgpsAPI.put(`/associateds/${id}`, associated);
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.putAssociated = putAssociated;
function deleteAssociated(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            yield sgpsAPI_1.sgpsAPI.delete(`/associateds/${id}`);
            return response.status(200).json();
        }
        catch (error) {
            return response.status(500).json(error);
        }
    });
}
exports.deleteAssociated = deleteAssociated;
