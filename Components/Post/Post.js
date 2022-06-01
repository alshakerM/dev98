import React from 'react';
import styles from './Post.module.css';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import cx from 'classnames';
import { readingTime, decodeEntities, removeReadMore } from '../../utils';
import Footer from '../Footer/Footer';

function PostHeader({ cats, title }) {
  return (
    <header>
      {cats.map((cat) => (
        <Link key={cat.slug} href={`/?category=${cat.name}`}>
          <a className={styles.catName}>{cat.name}</a>
        </Link>
      ))}
      <h2 className={styles.title}>{decodeEntities(title)}</h2>
    </header>
  );
}

function PostBody({ post, tags, readTime }) {
  return (
    <section className={styles.postText}>
      <p
        className={styles.excerpt}
        dangerouslySetInnerHTML={{
          __html: decodeEntities(removeReadMore(post.excerpt)),
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
        <p className={styles.readTime}>{readTime} Min read</p>
      </section>
      <FeaturedImage post={post} />
    </section>
  );
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function FeaturedImage({ post }) {
  if (post.attachments && post.featured_image) {
    const postImage = Object.values(post.attachments).find(
      (p) => p.URL === post.featured_image
    );
    console.log({ postImage, post });
    return (
      postImage && (
        <Image
          src={postImage.URL}
          alt="A picture about the post"
          className={styles.postImg}
          width={postImage.width}
          height={postImage.height}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
      )
    );
  }
}

export default function Post({ post, isLoading }) {
  const cats = Object.values(post.categories).slice(0, 5);
  const tags = Object.values(post.tags).slice(0, 5);
  const readTime = readingTime(post.content);

  return (
    <article
      key={post.ID}
      className={cx(styles.postSection, {
        [styles.isLoading]: isLoading,
      })}
    >
      <PostHeader cats={cats} title={post.title} />
      <PostBody post={post} tags={tags} readTime={readTime} />
      <Footer post={post} />
    </article>
  );
}
