import React from 'react';
import { FeedPhotosItem } from './FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

export const FeedPhotos = () => {
  const { list } = useSelector(state => state.feed);

  return (
    <ul className={`${styles.photosContainer} animationLeft`}>
      {list.map(item => (
        <FeedPhotosItem key={item.id} photo={item} />
      ))}
    </ul>
  );
};
