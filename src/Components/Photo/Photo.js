import React from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';
import { PhotoContent } from './PhotoContent';
import { Head } from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../store/photo';

export const Photo = () => {
  const { id } = useParams();
  const { data, error, loading } = useSelector(state => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  if (error) return <Error error={error} style={{ margin: '0 auto' }} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section className="container" style={{ marginBlock: '3.2rem' }}>
      {data && <Head title={data.photo.title} />}
      <PhotoContent single={true} />
    </section>
  );
};
