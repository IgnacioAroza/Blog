import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { PostCardProps } from '@/sanity/types';
import { portableTextComponents } from './PortableTextComponents';

export default function PostCard({ post, postImageUrl }: PostCardProps) {
  return (
    <article className="space-y-8">
      {/* Navigation */}
      <nav className="text-sm">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to posts
        </Link>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <time dateTime={post.publishedAt}>
            Published: {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {postImageUrl && (
        <figure className="space-y-2">
          <div className="flex justify-center items-center bg-zinc-900/50 rounded-xl overflow-hidden" style={{ maxHeight: '24rem' }}>
            <Image
              src={postImageUrl}
              alt={post.image?.alt || post.title}
              className="max-w-full max-h-full object-contain"
              width={800}
              height={450}
              priority
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '24rem'
              }}
            />
          </div>
          {post.image?.caption && (
            <figcaption className="text-sm text-zinc-500 text-center italic">
              {post.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Content */}
      <div className="prose prose-invert prose-zinc max-w-none">
        <div className="prose-content">
          {Array.isArray(post.body) && (
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-zinc-800">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all posts
          </Link>
          
          <div className="text-sm text-zinc-500">
            Thanks for reading!
          </div>
        </div>
      </footer>
    </article>
  );
}
