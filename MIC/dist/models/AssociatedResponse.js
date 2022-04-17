"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCareType = exports.AgeGroup = exports.AssociatedStatus = exports.HealthCare = void 0;
var HealthCare;
(function (HealthCare) {
    HealthCare["INDIVIDUAL"] = "INDIVIDUAL";
    HealthCare["BUSINESS"] = "BUSINESS";
})(HealthCare = exports.HealthCare || (exports.HealthCare = {}));
var AssociatedStatus;
(function (AssociatedStatus) {
    AssociatedStatus["ACTIVE"] = "ACTIVE";
    AssociatedStatus["INACTIVE"] = "INACTIVE";
    AssociatedStatus["SUSPENDED"] = "SUSPENDED";
})(AssociatedStatus = exports.AssociatedStatus || (exports.AssociatedStatus = {}));
var AgeGroup;
(function (AgeGroup) {
    AgeGroup["AGE_0_TO_10_YEARS"] = "AGE_0_TO_10_YEARS";
    AgeGroup["AGE_10_TO_20_YEARS"] = "AGE_10_TO_20_YEARS";
    AgeGroup["AGE_20_TO_30_YEARS"] = "AGE_20_TO_30_YEARS";
    AgeGroup["AGE_30_TO_40_YEARS"] = "AGE_30_TO_40_YEARS";
    AgeGroup["AGE_40_TO_50_YEARS"] = "AGE_40_TO_50_YEARS";
    AgeGroup["AGE_50_TO_60_YEARS"] = "AGE_50_T0_60_YEARS";
    AgeGroup["AGE_60_PLUS_YEARS"] = "AGE_60_PLUS_YEARS";
})(AgeGroup = exports.AgeGroup || (exports.AgeGroup = {}));
var HealthCareType;
(function (HealthCareType) {
    HealthCareType["INFIRMARY"] = "INFIRMARY";
    HealthCareType["APARTMENT"] = "APARTMENT";
    HealthCareType["VIP"] = "VIP";
})(HealthCareType = exports.HealthCareType || (exports.HealthCareType = {}));
