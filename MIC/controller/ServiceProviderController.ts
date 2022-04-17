import { Request, Response } from "express";
import { ServiceProvider, ServiceProviderResponse, ServiceProviderIndexResponse } from "../models/ServiceProvider";
import { sgpsAPI } from "../services/sgpsAPI";

export async function getServiceProvider(request: Request, response: Response): Promise<Response> {
  try {
    const { data }: ServiceProviderIndexResponse = await sgpsAPI.get("/serviceProviders");
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
} 

export async function postServiceProvider(request: Request, response: Response): Promise<Response> {
  try {
    const serviceProvider: ServiceProvider = request.body;
    const { data }: ServiceProviderResponse = await sgpsAPI.post('/serviceProviders', serviceProvider);
    return response.status(201).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function putServiceProvider(request: Request, response: Response): Promise<Response> {
  try {
    const { id } = request.params;

    const serviceProvider: ServiceProvider = request.body;

    const { data }: ServiceProviderResponse = await sgpsAPI.put(`/serviceProviders/${id}`, serviceProvider);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function deleteServiceProvider(request: Request, response: Response): Promise<Response> {
  try {
    const { id } = request.params;
    await sgpsAPI.delete(`/serviceProviders/${id}`);
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json(error);
  }
}