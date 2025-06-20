import { api } from "@/lib/api";
import { LoginFormValues, RegisterFormValues } from "@/schema/auth";
import { toast } from "sonner";

interface RegisterUserResponse {
    message?: string;
}

interface LoginUserResponse {
    access_token: string;
}
interface RegisterUserParams {
    queryKey: string[];
    payload: RegisterFormValues;
}

interface LoginUserParams {
    queryKey: string[];
    payload: LoginFormValues;
}


export const registerUser = async ({
    queryKey,
    payload,
}: RegisterUserParams): Promise<RegisterUserResponse> => {
    try {
        const [API_ENDPOINT] = queryKey;
        const response = await api.post<RegisterUserResponse>(API_ENDPOINT, payload);
        toast.success(response.data.message || "Registration successful");
        return response.data;
    } catch (error: any) {

        const message = error?.response?.data?.message || "Registration failed.";
        toast.error(message);
        throw new Error(message);
    }
};


export const loginuser = async ({
    queryKey,
    payload,
}: LoginUserParams): Promise<LoginUserResponse> => {
    try {
        const [API_ENDPOINT] = queryKey;
        const response = await api.post<LoginUserResponse>(API_ENDPOINT, payload);
        toast
            .success('Login SuccessFull')
        return response.data;
    } catch (error: any) {

        const message = error?.response?.data?.message || "Login failed.";
        toast.error(message);
        throw new Error(message);
    }
};