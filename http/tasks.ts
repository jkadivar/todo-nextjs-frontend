import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { CreateTaskFormValues, EditTaskFormValues } from "@/schema/task";
import { Task } from "@/types/tasks.type";
import axios from "axios";
import { toast } from "sonner";

interface GetAllTasksParams {
  queryKey: string[];
}

interface CreateTaskParams{
  queryKey: string[];

  payload:CreateTaskFormValues
}

interface EditTaskParams{
  queryKey: string[];

  payload:EditTaskFormValues
}


interface DeleteTaskParams{
  queryKey: string[];

}



export async function getTasks(requestHeaders: Headers) {
  try {
    const cookie = requestHeaders.get("cookie") || "";

    const apiWithCookies = axios.create({
      baseURL: "http://localhost:3001",
      headers: {
        cookie,
      },
    });

    const response = await apiWithCookies.get<Task[]>("/tasks");
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch tasks:", error.message);
    return [];
  }
}

export const createTask = async ({
    queryKey,
    payload, 
  }: CreateTaskParams): Promise<Task> => {
    try {
      const [API_ENDPOINT] = queryKey;
      const response = await api.post<Task>(API_ENDPOINT, payload);
      toast.success('Task Created') 
  
      return response.data; 
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create task.";
      toast.error(message)
      throw new Error(message); 
    }
  };

  export const editTask = async ({
    queryKey,
    payload, 
  }: EditTaskParams): Promise<Task> => {
    try {
      const [API_ENDPOINT] = queryKey;
      const response = await api.put<Task>(API_ENDPOINT, payload);
      toast.success('Task Edited Successfully') 
  
      return response.data; 
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create task.";
      toast.error(message)
      throw new Error(message); 
    }
  };

  export const deletetask = async ({
    queryKey,
  }: DeleteTaskParams): Promise<void> => {
    try {
      const [API_ENDPOINT] = queryKey;
      const response = await api.delete<void>(API_ENDPOINT);
      toast.success('Task Deleted Successfully') 
  
      return response.data; 
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create task.";
      toast.error(message)
      throw new Error(message); 
    }
  };


  export async function getTasksbyId(requestHeaders: Headers,id:string) {
    try {
      const cookie = requestHeaders.get("cookie") || "";
  
      const apiWithCookies = axios.create({
        baseURL: "http://localhost:3001",
        headers: {
          cookie,
        },
      });
  
      const response = await apiWithCookies.get<Task>(API_ENDPOINTS.gettaskbyid(id));
      return response.data;
    } catch (error: any) {
      console.error("Failed to fetch tasks:", error.message);
      return null;
    }
  }


