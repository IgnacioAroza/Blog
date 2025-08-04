import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/queries';
import { type Post } from '@/sanity/types';
import Link from 'next/link';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostList() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Sharing experiences, learnings, and knowledge on backend development, software architecture, and programming best practices.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {posts.map((post) => {
          const imageUrl = post.image?.asset
            ? urlFor(post.image.asset)?.width(400).height(200).url()
            : null;

          return (
            <article
              key={post._id}
              className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 ${
                post.featured ? 'ring-2 ring-blue-500/20 bg-blue-950/10' : ''
              }`}
            >
              {post.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    ⭐ Featured
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {imageUrl && (
                  <div className="md:w-48 md:flex-shrink-0">
                    <Link href={`/${post.slug.current}`}>
                      <Image
                        src={imageUrl}
                        alt={post.image?.alt || post.title}
                        width={400}
                        height={200}
                        className="w-full h-32 md:h-28 object-contain bg-zinc-900/50 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                        style={{
                          maxHeight: '7rem', // 112px para md:h-28
                          objectFit: 'contain'
                        }}
                      />
                    </Link>
                  </div>
                )}
                
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <Link href={`/${post.slug.current}`}>
                      <h2 className="text-xl font-bold text-zinc-100 hover:text-blue-400 transition-colors line-clamp-2 cursor-pointer">
                        {post.title}
                      </h2>
                    </Link>
                    
                    {post.excerpt && (
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <time className="text-zinc-500">
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-zinc-500">
                            +{post.tags.length - 3} más
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <Link href={`/${post.slug.current}`}>
                    <div className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors cursor-pointer">
                      Read more
                      <svg className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-400 text-lg">
            No hay posts publicados aún. ¡Pronto habrá contenido nuevo!
          </p>
        </div>
      )}
    </div>
  );
}
