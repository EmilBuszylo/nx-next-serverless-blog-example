import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy} from "@emer-blog/shared/utils";
import {blogPostData} from "@emer-blog/blog-post/entity";

interface Request {
  pathParameters: {
    id: string;
  }
}

const handler = (req: Request, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;

  const {id} = req.pathParameters

  const res = blogPostData.find(el => id && Number(id) === el.id)

  if (!res) {
    return formatJSONResponse(404, {message: "item not found"})
  }

  return formatJSONResponse(200, res)
}

export const main = middyfy(handler)
