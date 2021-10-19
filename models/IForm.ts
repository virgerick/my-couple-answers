import { IQuestion } from "./IQuestion";

export  interface IForm {
  id?: string;
  userId?: String;
  name?: String;
  questions?: Array<IQuestion>;
}
