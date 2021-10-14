export interface Question {
  id: String;
  text: String;
  answers: Array<String>;
  correctAnswars: String | Array<String>;
}
