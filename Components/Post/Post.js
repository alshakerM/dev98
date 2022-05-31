import React from 'react';
import styles from './Post.module.css';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import cx from 'classnames';
import { readingTime, decodeEntities, removeReadMore } from '../../utils';
import Footer from '../Footer/Footer';

function PostHeader({ cats, title }) {
  return (
    <div>
      {cats.map((cat) => (
        <Link key={cat.slug} href={`/?category=${cat.name}`}>
          <a className={styles.catName}>{cat.name}</a>
        </Link>
      ))}
      <h2 className={styles.title}>{decodeEntities(title)}</h2>
    </div>
  );
}

function PostBody({ post, tags, readTime }) {
  return (
    <section className={styles.postText}>
      <p
        className={styles.excerpt}
        dangerouslySetInnerHTML={{
          __html: removeReadMore(post.excerpt),
        }}
      ></p>
      <a
        className={styles.readMore}
        href={post.URL}
        target="_blank"
        rel="noreferrer"
      >
        Read More
      </a>
      <section className={styles.tagSection}>
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/?tag=${tag.name}`}>
            <a className={styles.tagName}>{tag.name}</a>
          </Link>
        ))}
        <p className={styles.readTime}>{readTime} read</p>
      </section>
      <PostImage post={post} />
    </section>
  );
}

function PostImage({ post }) {
  return (
    post.post_thumbnail && (
      <div className={styles.imgContainer}>
        <Image
          src={post.post_thumbnail.URL}
          alt={post.featured_image}
          className={styles.postImg}
          width={post.post_thumbnail.width}
          height={post.post_thumbnail.height}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    )
  );
}

export default function Post({ post, isLoading }) {
  const cats = Object.values(post.categories).slice(0, 5);
  const tags = Object.values(post.tags).slice(0, 5);
  const readTime = readingTime(post.content);

  return (
    <section
      key={post.ID}
      className={cx(styles.postSection, {
        [styles.isLoading]: isLoading,
      })}
    >
      <PostHeader cats={cats} title={post.title} />
      <PostBody post={post} tags={tags} readTime={readTime} />
      <Footer post={post} />
    </section>
  );
}
