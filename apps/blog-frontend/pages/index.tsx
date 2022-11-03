import React from "react";
import {GetServerSideProps} from 'next'
import {BlogPost} from "@emer-blog/blog-post/entity";
import {PaginateResult} from "@emer-blog/shared/utils";
import {Card} from "../components/Card/Card";
import {Pagination} from "../components/Pagination/Pagination";
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "../components/Pagination/consts";
import {NoResults} from "../components/EmptyState/NoResults";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";
import {PageHeader} from "../components/Page/PageHeader";
import {PageTitle} from "../components/Page/PageTitle";
import {CategoriesFilterBar} from "../components/Categories/CategoriesFilterBar";
import {Categories} from "../components/Categories/Categories";

export const Index: React.FC<{ data: PaginateResult<BlogPostWithCategories> }> = ({data}) => {
  const {results, ...rest} = data

  const showPosts = results?.length > 0

  return (
    <>
      <PageHeader>
        <PageTitle>Our Cool Blog Posts</PageTitle>
        <p className="text-gray-600 text-lg">Suspendisse nec metus nec sapien ultrices vulputate eget eget est.</p>
      </PageHeader>
      <Categories/>
      <div
        className={`${showPosts ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1"}`}>
        {
          showPosts ?
            results.map(r => (
              <Card post={r} key={r.id}/>
            )) : (
              <NoResults/>
            )
        }
      </div>
      {
        showPosts && <Pagination {...rest}/>
      }
    </>
  );
}

export interface BlogPostWithCategories extends Omit<BlogPost, 'categories'> {
  categories: BlogCategoryEntity[]
}

export const getServerSideProps: GetServerSideProps<{ data: PaginateResult<BlogPostWithCategories> }> = async (ctx) => {
  const {query} = ctx
  const page = query?.page ?? DEFAULT_PAGE
  const limit = query?.limit ?? DEFAULT_LIMIT
  const terms = query?.terms && query.terms.length > 2 && query.terms
  const categories = query?.categories

  const res = await fetch(`${process.env.BLOG_API_URL}/posts?page=${page}&limit=${limit}${terms ? `&terms=${terms}` : ""}${categories ? `&categories=${categories}` : ""}`)
  const data = await res.json()

  return {props: {data}}
}

export default Index;
