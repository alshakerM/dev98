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
          <Navigation className={styles.navIcon} />
        </button>
      </Tooltip>
    );
  }
}
