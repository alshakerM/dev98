import React from 'react';
import styles from './HomePage.module.css';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { ArrowBackOutlined } from '@mui/icons-material';
import Post from '../Post/Post';
import ErrorPage from '../ErrorPage/ErrorPage';
import TopBar from '../TopBar/TopBar';
import { useParamsString, usePosts } from '../../apiClient';
import NavButton from '../NavButton/NavButton';

export default function HomePage() {
  const params = useParamsString();

  // check if we have any params to show the back button
  const hasParams = !!params;

  const { posts, isLoading, isError } = usePosts();

  return (
    <>
      <TopBar />
      <NavButton />
      {!isError ? (
        <main className={styles.content}>
          {hasParams && (
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

          {posts?.map((post) => {
            return <Post post={post} key={post.ID} isLoading={isLoading} />;
          })}
        </main>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
