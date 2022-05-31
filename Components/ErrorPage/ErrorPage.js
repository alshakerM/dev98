import React from 'react';
import styles from './ErrorPage.module.css';
import { SignalWifiConnectedNoInternet4TwoTone } from '@mui/icons-material';

export default function ErrorPage() {
  return (
    <main>
      <div className={styles.errorPage}>
        <div className={styles.errorContent}>
          <SignalWifiConnectedNoInternet4TwoTone className={styles.errorIcon} />
          <h2 className={styles.errorText}>
            {/*eslint-disable-next-line react/no-unescaped-entities */}
            Sorry, we couldn't reach our servers to fetch the feed for you. Most
            likely, this is a temporary error. Please try again later.
          </h2>
        </div>
      </div>
    </main>
  );
}
