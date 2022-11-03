import React from "react";
import {LoremIpsum} from "lorem-ipsum";
import {GetServerSideProps} from "next";
import {BlogPost} from "@emer-blog/blog-post/entity";
import {PageHeader} from "../../components/Page/PageHeader";
import {PageTitle} from "../../components/Page/PageTitle";
import {PostImage} from "../../components/Post/PostImage";
import {PostTag} from "../../components/Post/PostTag";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 120,
    min: 40
  },
  wordsPerSentence: {
    max: 60,
    min: 20
  }
});

interface BlogPostWithBody extends Omit<BlogPost, 'categories'> {
  body: string[];
  categories: BlogCategoryEntity[]
}

const BlogPostPage: React.FC<{ data: BlogPostWithBody }> = ({data}) => {
  const {title, imageUrl, excerpt, body, categories} = data

  return (
    <div className="text-center mx-auto lg:px-20">
      <PageHeader>
        <PageTitle>
          {title}
        </PageTitle>
      </PageHeader>
      <PostImage url={imageUrl} title={title}/>
      <div className="flex space-x-2 mb-2 max-w-screen-md mx-auto">
        {
          categories.map(cat => (
            <PostTag cat={cat}/>
          ))
        }
      </div>
      <article className="text-black max-w-screen-md mx-auto text-left">
        <p className="font-semibold">
          {excerpt}
        </p>
        <div
          className="mx-auto p-6 max-w-sm bg-white rounded-lg border border-border-light shadow-md my-12">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-font-default">Unlimited Access</h5>
          <p className="mb-3 font-normal text-font-light">Full article is allowed only for non free
            users. If you want to read more please purchase subscription</p>
          <a href="#"
             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-accent-default rounded-lg hover:bg-green-800">
            Purchase Now
          </a>
        </div>
        <div className="flex flex-col space-y-6 blur-lg">
          {
            body.map(b => (
              <p key={b.slice(0, 10)}>
                {b}
              </p>
            ))
          }

        </div>

      </article>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: BlogPost }> = async (ctx) => {
  const slug = ctx.params?.slug
  const res = await fetch(`${process.env.BLOG_API_URL}/post/${slug}`)
  const data = await res.json()

  return {props: {data: {...data, body: lorem.generateSentences(5).split(".")}}}
}

export default BlogPostPage
