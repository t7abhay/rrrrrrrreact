import axiosInstance from "../config/axios/axiosInstance.ts";
import {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  ChangePasswordResponse,
  ChangePasswordRequest,
} from "./types/authTypes.ts";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await axiosInstance.post<LoginResponse>("/login", data);

  const { refreshToken } = response.data.data;

  const accessToken: string = response.headers["authorization"];

  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  localStorage.setItem("refreshToken", refreshToken);

  return response.data;
}

export async function register(
  data: RegistrationRequest
): Promise<RegistrationResponse> {
  const response = await axiosInstance.post<RegistrationResponse>(
    "/register",
    data
  );

  return response.data;
}

export async function changePassword(
  data: ChangePasswordRequest
): Promise<ChangePasswordResponse> {
  const response = await axiosInstance.post<ChangePasswordResponse>(
    "/change-password",
    data
  );

  return response.data;
}
