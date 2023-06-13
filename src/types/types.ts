import { Control } from "react-hook-form";

export interface TodoType {
  id: number;
  title: string;
  importance: string;
}

export interface inputTypes {
  placeholder: string;
  label: string;
  name: string;
  control: Control;
}

export interface selectTypes {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  control: Control;
}
