import React from "react";
import {ArticleJsonLd} from 'next-seo';
import {NextSeo} from 'next-seo';

interface PostSeoProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PostSeo: React.FC<PostSeoProps> = ({title, description, imageUrl = []}) => {

  const featuredImages = [{
    url: imageUrl,
    alt: title,
  }]

  return (
    <>
      <NextSeo
        title={`${title} – Cool Blog`}
        description={description}
        openGraph={{
          type: 'article',
          title,
          description: description,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={[
          {
            name: 'Unknown Author',
            url: 'https://example.com',
          },
        ]}
        description={description}
        images={[imageUrl]}
        title={title}
      />
    </>
  )
}
