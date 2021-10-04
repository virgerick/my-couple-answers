import type { NextApiRequest, NextApiResponse } from "next";
import { methodNotSuported, Question, Response } from ".";
import HTTPMethod from "../../../enums/HTTPMethod";
import HttpStatusCode from "../../../enums/HttpStatusCode";

import {Repository} from "../../../repository";
const QuestionRepository=new Repository<Question>("votes");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    try {
      const { method, body, query } = req;
  
      switch (method) {
        case HTTPMethod.GET:
         const data =await QuestionRepository.getByIdAsync(query.id.toString())
          res.status(HttpStatusCode.OK).send({success:true,result:data})
         break;
        case HTTPMethod.PUT:
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
