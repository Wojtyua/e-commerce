"use client";

import Image from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [image, setImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex md:flex-col order-2 gap-2">
        {images.map((image, index) => (
          <Image
            src={image}
            alt="product image"
            width={80}
            height={80}
            key={index}
            onClick={() => setImage(images[index])}
            onMouseEnter={() => setImage(images[index])}
            className=" min-w-20 h-20 object-cover cursor-pointer hover:bg-red rounded-sm"
          />
        ))}
      </div>
      <div className="order-1">
        <Image
          src={image}
          alt="product image"
          width={700}
          height={700}
          className="w-auto h-auto object-cover rounded-sm"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
