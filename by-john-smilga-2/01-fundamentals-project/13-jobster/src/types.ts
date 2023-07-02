import { ReactNode } from "react";

// Register Page types
export interface IRegisterInitialState {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}
export interface IFormRow {
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

// User Slice Types
export interface IUserSliceInitialState {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: null;
}
export interface IUserSlice {
  name: string;
  initialState: IUserSliceInitialState;
}

export interface ILoginUser {
  email: string;
  password: string;
}
export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

// user Type
export interface IUser {
  email: string;
  lastName: string;
  location: string;
  name: string;
  token: string;
}

//  protected route
export interface ProtectedRouteProps {
  children: ReactNode;
}

// links type
export interface ILinks {
  id: number;
  text: string;
  path: string;
  icon: ReactNode;
}

export interface IUserData {
  name: string | "";
  email: string | "";
  lastName: string | "";
  location: string | "";
}

export interface RootStateType {
  auth: {
    user: IUserData;
  };
}
