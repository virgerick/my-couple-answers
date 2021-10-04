// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from "../../../firebase";

import type { NextApiRequest, NextApiResponse } from "next";
import HttpStatusCode from "../../../enums/HttpStatusCode";
import HTTPMethod from "../../../enums/HTTPMethod";
const { GET, POST, PUT } = HTTPMethod;
export type Response = {
  message?: string | string[];
  success: boolean;
  result?: Question | any;
};
export interface Question {
  id: string;
  name: string;
  answars: Array<string>;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { method, body, query } = req;
    console.log({ method, body, query });

    const db = firebase?.firestore();
    const votesRef = db.collection("votes");
    switch (method) {
      case GET:
        let data: Array<Question> = [];
        if (!query.vote && !query.id) {
          const snapshot = await votesRef.get();
          data = snapshot.docs.map((x) => x.data() as Question);
        } else {
          const snapshot = await votesRef.where("vote", "==", query.vote).get();
          data = snapshot.docs.map((x) => x.data() as Question);
        }

        res.status(HttpStatusCode.OK).send({ success: true, result: data });
        break;
      case POST:
        break;

      default:
        methodNotSuported(res);
    }
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send({ success: false, result: error });
  }

  
}
 export function methodNotSuported( res: NextApiResponse<Response>) {
  res
    .status(HttpStatusCode.METHOD_NOT_ALLOWED)
    .send({ success: false, message: ["Method not allowed"] });
}