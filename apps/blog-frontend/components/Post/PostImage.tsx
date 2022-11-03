import React from "react";
import Image from "next/image";

interface PostImageProps {
  url: string;
  title: string;
}

export const PostImage: React.FC<PostImageProps> = ({url, title}) => {
  const [error, setError] = React.useState(false);

  return (
    <div
      className="relative z-0 max-w-screen-md mx-auto overflow-hidden lg:rounded-lg aspect-video mb-6"
    >
      <Image
        className="object-cover"
        src={error ? "/static/images/placeholder.webp" : url} alt={title}
        fill
        sizes="(max-width: 350px) 100vw,
              (max-width: 380px) 50vw,
              33vw"
        placeholder="blur"
        blurDataURL="/static/images/placeholder.webp"
        onError={() => setError(true)}
      />
    </div>
  )
}
