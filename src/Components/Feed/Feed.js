import React from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos, resetFeedState } from '../../store/feed';
import { Loading } from '../Helper/Loading';

export const Feed = ({ user }) => {
  const { infinite, list, loading, error } = useSelector(state => state.feed);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > 0.75 * height && !wait) {
          dispatch(loadNewPhotos({ user, total: 6 }));
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite, dispatch, user]);
  return (
    <>
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      {list.length > 0 && <FeedPhotos />}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '3.2rem 0',
            color: '#888',
          }}
        >
          There are no more posts to show right now.
        </p>
      )}
      <FeedModal />
    </>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
