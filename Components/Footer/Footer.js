import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import styles from './Footer.module.css';

function PostInfo({ post }) {
  return (
    <section className={styles.postDateAndComments}>
      <div>
        <p>Written by</p>
        <h2>{post.author.name}</h2>
      </div>
      <div>
        <p>Published on</p>
        <h2>{new Date(post.date).toLocaleDateString('en-gb')}</h2>
      </div>
      <div>
        <p>Comments</p>
        <h2>
          {post.discussion.comment_count}
          <span className={styles.commentCount}> Comments</span>
        </h2>
      </div>
    </section>
  );
}

function ShareIcons({ URL }) {
  return (
    <section className={styles.shareSection}>
      <CopyButton URL={URL} />

      <a
        href={`https://twitter.com/intent/tweet?post.URL=${encodeURIComponent(
          URL
        )}`}
        className={styles.twitterBtn}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={styles.shareIcon}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
        </svg>
      </a>
      <a
        className={styles.facebookBtn}
        href={`https://www.facebook.com/share.php?u=${encodeURIComponent(URL)}`}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={styles.shareIcon}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      </a>
      <a
        className={styles.linkedInBtn}
        href={`https://www.linkedin.com/cws/share?post.URL=${encodeURIComponent(
          URL
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={styles.shareIcon}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </section>
  );
}

export default function Footer({ post, setCopyText, copyText }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.postInfo}>
        <PostInfo post={post} />
        <ShareIcons ID={post.ID} URL={post.URL} />
      </div>
    </footer>
  );
}
