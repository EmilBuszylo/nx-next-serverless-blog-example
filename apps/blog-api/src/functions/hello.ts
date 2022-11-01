import {Context} from 'aws-lambda';
import {middyfy} from "@emer-blog/shared/utils";

export const hello = (req: any, ctx: Context) => {

  return {
    statusCode: 200,
    body: "hello",
  }
};

export const main = middyfy(hello)
