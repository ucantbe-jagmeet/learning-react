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
