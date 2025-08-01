// Query para el listado de posts en la home
export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  excerpt,
  publishedAt,
  featured,
  tags,
  image{
    asset,
    caption,
    alt
  }
}`;

// Query para un post individual
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  tags,
  body,
  image{
    asset,
    caption,
    alt
  },
  seo{
    metaTitle,
    metaDescription
  }
}`;

// Query para posts destacados (opcional)
export const FEATURED_POSTS_QUERY = `*[
  _type == "post"
  && featured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  image{
    asset,
    caption,
    alt
  }
}`;

// Query para posts por tag (opcional)
export const POSTS_BY_TAG_QUERY = `*[
  _type == "post"
  && $tag in tags
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  tags,
  image{
    asset,
    caption,
    alt
  }
}`;
