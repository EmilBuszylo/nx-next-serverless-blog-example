import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy} from "@emer-blog/shared/utils";
import {blogCategoryData} from "@emer-blog/blog-category/entity";


const handler = (_req: Record<string, unknown>, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;

  return formatJSONResponse(200, blogCategoryData)
}

export const main = middyfy(handler)
