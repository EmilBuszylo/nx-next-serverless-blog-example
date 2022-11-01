import {Context} from "aws-lambda";
import {formatJSONResponse, middyfy, paginate} from "@emer-blog/shared/utils";
import {BlogPost, blogPostData} from "@emer-blog/blog-post/entity";
import {blogCategoryData, BlogCategoryEntity} from "@emer-blog/blog-category/entity";

interface Request {
  queryStringParameters: {
    page?: string;
    limit?: string;
    categories?: string;
    terms?: string;
  }
}

interface BlogPostWithCategories extends Omit<BlogPost, 'categories'> {
  categories: BlogCategoryEntity[]
}

const handler = (req: Request, ctx: Context) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  const {page, limit, categories, terms} = req.queryStringParameters
  console.log(req.queryStringParameters)
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

  if (terms) {
    posts = posts.filter(p => p.title.toLowerCase().includes(terms.toLowerCase()))
    console.log({posts})
  }


  return formatJSONResponse(200, paginate<BlogPostWithCategories>({
    items: posts.map(p => ({
      ...p,
      categories: p.categories.map(c => ({...blogCategoryData.find(el => el.id === c)}))
    })),
    page: page && Number(page),
    limit: limit && Number(limit)
  }))
}

export const main = middyfy(handler)
