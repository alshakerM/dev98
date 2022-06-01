import { Navigation } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';
import styles from './NavButton.module.css';

export default function NavButton() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    function handler() {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (showButton) {
    return (
      <Tooltip title="Back to top">
        <button className={styles.navButton} onClick={scrollToTop}>
          <svg
            className={styles.navIcon}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
          </svg>
        </button>
      </Tooltip>
    );
  }
}
