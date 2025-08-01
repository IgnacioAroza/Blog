import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';
import { ImageBlock as ImageBlockType } from '@/sanity/types';

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface ImageBlockProps {
  value: ImageBlockType;
}

export default function ImageBlock({ value }: ImageBlockProps) {
  const { asset, caption, alt } = value;
  
  const imageUrl = urlFor(asset)?.width(800).height(450).url();
  
  if (!imageUrl) return null;

  return (
    <figure className="my-8 space-y-3">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={alt || caption || 'Image'}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      
      {caption && (
        <figcaption className="text-sm text-zinc-500 text-center italic leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
