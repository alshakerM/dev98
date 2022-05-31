import { Tooltip } from '@mui/material';
import React from 'react';
import { copy } from '../../utils';
import styles from './CopyButton.module.css';

export default function CopyButton({ URL, ID }) {
  const [copyText, setCopyText] = React.useState('Copy');
  return (
    <Tooltip title={ID === copyText ? 'Copied' : 'Copy'}>
      <button
        className={styles.copyBtn}
        onClick={() => {
          copy(URL);
          setCopyText(ID);
        }}
      >
        <svg
          width="14"
          height="14"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="white"
            className={styles.copyBtnIcon}
            d="M17 7h6v16h-16v-6h-6v-16h16v6zm5 1h-14v14h14v-14zm-6-1v-5h-14v14h5v-9h9z"
          />
        </svg>
        <p className={styles.copyBtnText}>Copy link</p>
      </button>
    </Tooltip>
  );
}
