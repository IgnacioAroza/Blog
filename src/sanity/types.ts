import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  tags?: string[];
  body: PortableTextBlock[];
  image?: {
    asset: SanityImageSource;
    caption?: string;
    alt?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface PostCardProps {
  post: {
    title: string;
    excerpt?: string;
    publishedAt: string;
    featured?: boolean;
    tags?: string[];
    body: PortableTextBlock[];
    image?: {
      asset: SanityImageSource;
      caption?: string;
      alt?: string;
    };
  };
  postImageUrl?: string;
}

// Tipos para los componentes personalizados del editor
export interface CodeBlock {
  _type: 'codeBlock';
  language?: string;
  code: string;
  filename?: string;
}

export interface Callout {
  _type: 'callout';
  type: 'info' | 'warning' | 'error' | 'success' | 'tip';
  content: PortableTextBlock[];
}

export interface ImageBlock {
  _type: 'image';
  asset: SanityImageSource;
  caption?: string;
  alt?: string;
}
