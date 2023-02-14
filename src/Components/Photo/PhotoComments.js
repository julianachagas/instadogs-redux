import React from 'react';
import styles from './PhotoComments.module.css';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import { useSelector } from 'react-redux';

export const PhotoComments = props => {
  const { data } = useSelector(state => state.user);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef();

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
        ref={commentsSection}
      >
        {comments.map(item => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}:</b> {item.comment_content}
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          photoId={props.photo.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};
