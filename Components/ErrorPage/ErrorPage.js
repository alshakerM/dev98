import React from 'react';
import styles from './ErrorPage.module.css';
import { SignalWifiConnectedNoInternet4TwoTone } from '@mui/icons-material';

export default function ErrorPage({ noPosts }) {
  return (
    <main>
      <div className={styles.errorPage}>
        <div className={styles.errorContent}>
          <SignalWifiConnectedNoInternet4TwoTone className={styles.errorIcon} />
          <h2 className={styles.errorText}>
            {noPosts ? (
              <p>
                Sorry, we couldn&apos;t find any posts matching the provided
                criteria.
              </p>
            ) : (
              <p>
                Sorry, we couldn&apos;t reach our servers to fetch the feed for
                you. Most likely, this is a temporary error. Please try again
                later.
              </p>
            )}
          </h2>
        </div>
      </div>
    </main>
  );
}
