import React from 'react';
import { Input } from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { Button } from '../Forms/Button';
import styles from './UserPost.module.css';
import { useNavigate } from 'react-router-dom';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { postPhoto, resetPostState } from '../../store/photoPost';

const fileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon',
];

export const UserPost = () => {
  const postName = useForm();
  const postWeight = useForm('number');
  const postAge = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading } = useSelector(state => state.photoPost);
  const navigate = useNavigate();
  const [fileError, setFileError] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data) {
      dispatch(resetPostState());
      navigate('/account');
    }
  }, [navigate, data, dispatch]);

  function validateFile({ target }) {
    if (target.files.length === 0) {
      setFileError('No files currently selected for upload.');
      setImg({ preview: '' });
      return false;
    } else if (!fileTypes.includes(target.files[0].type)) {
      setFileError('Not a valid file type. Update your selection.');
      setImg({ preview: '' });
      return false;
    } else {
      setFileError(null);
      return true;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      postPhoto({
        name: postName.value,
        weight: postWeight.value,
        age: postAge.value,
        img: img.raw,
      }),
    );
  }

  function handleChange(e) {
    validateFile(e);
    if (validateFile(e)) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setImg({ raw: file, preview: fileURL });
    }
  }

  return (
    <section className={`animationLeft ${styles.photoPost}`}>
      <Head title="Post Your Photo" />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="postName"
          label="Name"
          placeholder=""
          {...postName}
        />
        <Input
          type="number"
          id="postWeight"
          label="Weight (kg)"
          placeholder=""
          {...postWeight}
        />
        <Input
          type="number"
          id="postAge"
          label="Age (years)"
          placeholder=""
          {...postAge}
        />
        <input
          type="file"
          accept="image/*"
          id="img"
          name="img"
          onChange={handleChange}
          style={{ marginBottom: '1.6rem' }}
        />
        {fileError && <p className={styles.error}>{fileError}</p>}
        <Button disabled={loading ? true : false}>Send</Button>
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img.preview}` }}
        ></div>
      )}
    </section>
  );
};
