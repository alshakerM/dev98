import React from 'react';
import styles from './ErrorPage.module.css';
import { Dangerous, WarningOutlined } from '@mui/icons-material';

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContent}>
        <Dangerous className={styles.errorIcon} />
        <h2 className={styles.errorText}>
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          Sorry, we couldn't reach our servers to fetch the feed for you. Most
          likely, this is a temporary error. Please try again later
        </h2>
      </div>
    </div>
  );
}
