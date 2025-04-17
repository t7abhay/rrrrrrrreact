export interface Role {
  id: number;
  roleName: string;
}
export interface UserData {
  id: string; // UUIDv4
  username: string;
  email: string;
  password: string;
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
  roleId: number;
  role: Role;
}
export interface LoginRequest {
  email: string;
  password: string;
  username?: string;
}

export interface LoginResponse {
  statusCode: number;
  data: UserData;
  message: string;
  success: boolean;
}

export interface RegistrationRequest {
  email: string;
  password: string;
  username: string;
}

export interface RegistrationResponse {
  statusCode: number;
  data: object;
  message: string;
  success: boolean;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}
export interface ChangePasswordResponse {
  data: object;
}
