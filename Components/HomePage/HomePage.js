import React from 'react';
import styles from './HomePage.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from 'react-query';
import Tooltip from '@mui/material/Tooltip';
import { ArrowBackOutlined } from '@mui/icons-material';
import Post from '../Post/Post';
import ErrorPage from '../ErrorPage/ErrorPage';

function useParamsString() {
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
const emptyPosts = Array.from({ length: 10 }, () => ({
  title: ' '.repeat(48),
  excerpt: ' '.repeat(482),
  loading: true,
  tags: {},
  categories: {},
  content: '',
  author: {
    name: ' '.repeat(12),
  },
  discussion: {
    comment_count: 0,
  },
}));

export default function HomePage() {
  const router = useRouter();
  const params = useParamsString();
  const [error, setError] = React.useState(false);
  const {
    data: postsData = { posts: emptyPosts },
    isLoading,
    isError,
  } = useQuery(
    'fetching-posts:' + params,
    async () => {
      const res = await fetch(
        'https://public-api.wordpress.com/rest/v1.1/sites/dev98.de/posts?' +
          params.toString()
      );
      if (res.ok) {
        return res.json();
      } else {
        setError(true);
        // fetch doesn't throw when 404 for example, this makes sure it does
        throw new Error('YOOO');
      }
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: false,
    }
  );
  return (
    <>
      {error ? (
        <main className={styles.content}>
          {router.asPath !== '/' && (
            <Link href="/">
              <a className={styles.backBtn}>
                <Tooltip title="Home">
                  <ArrowBackOutlined
                    fontSize="large"
                    className={styles.arrowIcon}
                  />
                </Tooltip>
              </a>
            </Link>
          )}

          {postsData.posts?.map((post) => {
            return <Post post={post} key={post.ID} isLoading={isLoading} />;
          })}
        </main>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
