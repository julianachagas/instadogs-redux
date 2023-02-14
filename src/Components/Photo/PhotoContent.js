import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import { PhotoDelete } from './PhotoDelete';
import { PhotoComments } from './PhotoComments';
import { Image } from '../Helper/Image';
import { useSelector } from 'react-redux';

export const PhotoContent = ({ single }) => {
  const { photo, comments } = useSelector(state => state.photo.data);
  const { data } = useSelector(state => state.user);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''} `}>
      <div className={styles.image}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.photoDetails}>
        <div className={styles.photoInfo}>
          {data && data.username === photo.author ? (
            <PhotoDelete photoId={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.views}>{photo.acessos}</span>
        </div>
        <h1 className="title">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.photoAttributes}>
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade} {+photo.idade === 1 ? 'year' : 'years'}
          </li>
        </ul>
      </div>
      <PhotoComments photo={photo} comments={comments} single={single} />
    </div>
  );
};
