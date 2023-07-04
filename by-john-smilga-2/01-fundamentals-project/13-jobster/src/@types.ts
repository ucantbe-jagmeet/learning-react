/* eslint-disable @typescript-eslint/no-explicit-any */
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
  labelText?: string;
}

// User Slice Types
export interface IUserSliceInitialState {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: IUser | null;
}
export interface IUserSlice {
  name: string;
  initialState: IUserSliceInitialState;
}

export interface IUser {
  email: string;
  lastName: string;
  location: string;
  name: string;
  token: string;
}

export interface ILoginUser {
  email: string;
  password: string;
  user: IUser | null;
}
export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  user: IUser | null;
}

// user Type

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
  token?: string;
  user?: IUser | null;
}

export interface RootStateType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  auth: {
    user: IUserData;
  };
}

// jobslice
export type IJobSliceInitialState = {
  isLoading: boolean;
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: string[];
  jobType: string;
  statusOptions: string[];
  status: string;
  isEditing: boolean;
  editJobId: string;
};

export interface IFormRowSelect {
  labelText?: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
}

export type IJobSliceInitialStateFieldPayload = {
  [K in keyof IJobSliceInitialState]: {
    key: K;
    value: IJobSliceInitialState[K];
  };
}[keyof IJobSliceInitialState];

export interface ICreateJob {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  status: string;
}

export interface ISingleJob {
  _id: string;
  status: string;
  jobType: string;
  jobLocation: string;
  position: string;
  company: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
export interface IAllJobsSliceInitialState {
  isLoading: boolean;
  jobs: ISingleJob[];
  totalJobs: number;
  numOfPages: number;
  page: number;
  stats: Record<string, any>;
  monthlyApplications: any[];
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: string[];
}
