import React from "react";
import {GetServerSideProps} from 'next'
import {BlogPost} from "@emer-blog/blog-post/entity";
import {PaginateResult} from "@emer-blog/shared/utils";
import {Card} from "../components/Card";
import {Pagination} from "../components/Pagination/Pagination";
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "../components/Pagination/consts";

export const Index: React.FC<{ data: PaginateResult<BlogPost> }> = ({data}) => {
  const {results, ...rest} = data

  return (
    <>
      <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              results?.map(r => (
                <Card post={r} key={r.id}/>
              ))
            }
          </div>
        </div>
      </div>
      <Pagination {...rest}/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: PaginateResult<BlogPost> }> = async (ctx) => {
  const {query} = ctx
  const page = query?.page ?? DEFAULT_PAGE
  const limit = query?.limit ?? DEFAULT_LIMIT

  const res = await fetch(`${process.env.BLOG_API_URL}/posts?page=${page}&limit=${limit}`)
  const data = await res.json()

  return {props: {data}}
}

export default Index;
