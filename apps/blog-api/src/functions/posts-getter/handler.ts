import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy, paginate} from "@emer-blog/shared/utils";
import {blogPostData} from "@emer-blog/blog-post/entity";

interface Request {
  queryStringParameters: {
    page?: string;
    limit?: string;
  }
}

const handler = (req: Request, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  const {page, limit} = req.queryStringParameters

  return formatJSONResponse(200, paginate({
    items: blogPostData,
    page: page && Number(page),
    limit: limit && Number(limit)
  }))
}

export const main = middyfy(handler)
