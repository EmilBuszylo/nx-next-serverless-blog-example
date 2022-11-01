import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy, paginate} from "@emer-blog/shared/utils";
import {BlogPost, blogPostData} from "@emer-blog/blog-post/entity";

interface Request {
  queryStringParameters: {
    page?: string;
    limit?: string;
    categories?: string;
  }
}

const handler = (req: Request, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  const {page, limit, categories} = req.queryStringParameters

  let posts = blogPostData
  if (categories) {
    posts = posts.filter(p => {
      let isContains = false
      for (let c of categories.split(",")) {
        if (p.categories.includes(Number(c))) {
          isContains = true
        }

      }
      return isContains
    })
  }

  return formatJSONResponse(200, paginate<BlogPost>({
    items: posts,
    page: page && Number(page),
    limit: limit && Number(limit)
  }))
}

export const main = middyfy(handler)
