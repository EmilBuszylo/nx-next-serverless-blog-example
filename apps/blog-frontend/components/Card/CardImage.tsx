import React from "react";
import Image from "next/image";

interface CardImageProps {
  title: string;
  url: string
}

export const CardImage: React.FC<CardImageProps> = ({title, url}) => {
  const [error, setError] = React.useState(false);

  return (
    <div
      className={`overflow-hidden h-64 md:h-60 xl:h-64 relative block w-auto transition duration-200 ease-in-out hover:opacity-80`}>
      <Image class="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"
             src={error ? "/static/images/placeholder.webp" : url} alt={title} fill
             placeholder="blur"
             blurDataURL="/static/images/placeholder.webp"
             onError={() => setError(true)}
      />
    </div>
  )
}
