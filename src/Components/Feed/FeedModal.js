import React from 'react';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';
import styles from './FeedModal.module.css';

import { PhotoContent } from '../Photo/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/ui';

export const FeedModal = () => {
  const { data, loading, error } = useSelector(state => state.photo);
  const { modal } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  }

  if (!modal) return null;

  return (
    <div className={styles.modalWrapper} onClick={handleClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};
