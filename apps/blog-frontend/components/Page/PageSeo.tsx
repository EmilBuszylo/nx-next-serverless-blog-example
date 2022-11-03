import React from "react";
import {NextSeo} from 'next-seo';

interface PageSeoProps {
  title: string;
  description: string;
}

export const PageSeo: React.FC<PageSeoProps> = ({title, description}) => {
  return (
    <NextSeo
      title={`${title} – CoolBlog`}
      description={description}
      openGraph={{
        title,
        description,
      }}
    />
  )
}
