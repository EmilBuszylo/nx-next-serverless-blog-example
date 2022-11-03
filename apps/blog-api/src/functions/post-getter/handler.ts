import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy} from "@emer-blog/shared/utils";
import {blogPostData} from "@emer-blog/blog-post/entity";
import {blogCategoryData} from "@emer-blog/blog-category/entity";

interface Request {
  pathParameters: {
    slug: string;
  }
}

const handler = (req: Request, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;

  const {slug} = req.pathParameters

  const res = blogPostData.find(el => slug === el.slug)

  if (!res) {
    return formatJSONResponse(404, {message: "item not found"})
  }

  return formatJSONResponse(200, {
    ...res,
    categories: res.categories.map(c => ({...blogCategoryData.find(el => el.id === c)}))
  })
}

export const main = middyfy(handler)
