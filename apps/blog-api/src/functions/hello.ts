import {Context} from 'aws-lambda';
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

export const middyfy = (handler: any) => {
  return middy(handler).use(jsonBodyParser());
};

export const hello = (req: any, ctx: Context) => {

  return {
    statusCode: 200,
    body: "hello",
  }
};

export const main = middyfy(hello)
