import { ReactElement } from "react";

export interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyles?: Record<string, string>;
  name: string;
  value: string;
  icon?: ReactElement;
  placeholder?: string;
}
