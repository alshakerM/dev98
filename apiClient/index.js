import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * Empty post data to be used as placeholders during loading
 */
const postPlaceholders = Array.from({ length: 10 }, () => ({
  title: '-'.repeat(48),
  excerpt: '-'.repeat(482),
  loading: true,
  tags: {},
  categories: {
    categoryName: {
      ID: 2,
      name: '-'.repeat(9),
      slug: '-'.repeat(9),
      description: '',
      post_count: 21,
    },
  },
  content: '',
  author: {
    name: ' '.repeat(12),
  },
  discussion: {
    comment_count: 0,
  },
}));

/**
 * Fetches the posts data
 * @param {string} params url params (tag, category, and author)
 * @returns {object} result
 */
export async function fetchPosts(params) {
  const res = await fetch(
    'https://public-api.wordpress.com/rest/v1.1/sites/dev98.de/posts?' +
      params.toString()
  );
  if (res.ok) {
    return res.json();
  } else {
    const error = res.status;
    // fetch doesn't throw when 404 for example, this makes sure it does
    return Promise.reject(error);
  }
}
/**
 *
 * @returns the posts data, loading status and error status
 */
export function usePosts() {
  const params = useParamsString();
  const [data, setData] = useState(postPlaceholders);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPosts(params)
      .then((posts) => {
        setData(posts.posts);
      })
      .catch(() => setIsError(true));
  }, [params]);

  return { posts: data, isError, isLoading: data === postPlaceholders };
}
/**
 * Gets the URL params and returns them as a string
 * @returns the params of the URL as a string
 */
export function useParamsString() {
  const { query } = useRouter();
  const params = new URLSearchParams();
  if (query.tag) {
    params.set('tag', query.tag);
  }
  if (query.author) {
    params.set('author', query.author);
  }
  if (query.category) {
    params.set('category', query.category);
  }
  return params.toString();
}
