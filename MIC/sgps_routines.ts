import { Request, Response } from "express";
import { Associated, AssociatedResponse, AssociatedSGPS } from "./models/Associated";
import { sgpsAPI } from "./services/sgpsAPI";

export async function getAssociateds(request: Request, response: Response): Promise<Response> {
  try {
    const { data }: AssociatedResponse = await sgpsAPI.get("/associateds");
    const associateds: Associated[] = data.map(
      (associated: AssociatedSGPS) => ({
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
      })
    )
    return response.status(200).json(associateds);
  } catch (error) {
    return response.status(500).json(error);
  }
} 

export async function postAssociated(request: Request, response: Response): Promise<Response> {
  try {
    const requested: Associated = request.body;
    const associated: AssociatedSGPS = {
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

    const { data } = await sgpsAPI.post('/associateds', associated);
    return response.status(201).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function putAssociated(request: Request, response: Response): Promise<Response> {
  try {
    const { id } = request.params;

    const requested: Associated = request.body;
    const associated: AssociatedSGPS = {
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

    const { data } = await sgpsAPI.put(`/associateds/${id}`, associated);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function deleteAssociated(request: Request, response: Response): Promise<Response> {
  try {
    const { id } = request.params;
    await sgpsAPI.delete(`/associateds/${id}`);
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json(error);
  }
}