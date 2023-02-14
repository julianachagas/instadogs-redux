import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/ui';
import { Image } from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';
import { fetchPhoto } from '../../store/photo';

export const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li className={styles.photosItem} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};
