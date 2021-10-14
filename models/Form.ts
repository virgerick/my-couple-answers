import { Question } from "../pages/api/questions";

export  interface Form {
  id: string;
  userId: String;
  Name: String;
  Questions: Array<Question>;
}
