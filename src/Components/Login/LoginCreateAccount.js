import React from 'react';
import useForm from '../../Hooks/useForm';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useFetch } from '../../Hooks/useFetch';
import { USER_POST } from '../../Api';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/user';

export const LoginCreateAccount = () => {
  const newUsername = useForm('username');
  const newPassword = useForm('password');
  const newEmail = useForm('email');
  const { error, loading, request } = useFetch();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST(
      newUsername.value,
      newPassword.value,
      newEmail.value,
    );
    const { response } = await request(url, options);
    if (response.ok) dispatch(userLogin(newUsername.value, newPassword.value));
  }
  return (
    <section className="animationLeft">
      <Head title="Sign Up" />
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          id="newUsername"
          type="text"
          placeholder=""
          {...newUsername}
        />
        <Input
          label="Email"
          id="newEmail"
          type="email"
          placeholder=""
          {...newEmail}
        />
        <Input
          label="Password"
          id="newPassword"
          type="password"
          placeholder=""
          {...newPassword}
        />
        <Button disabled={loading ? true : false}>Sign Up</Button>
        <Error error={error} />
      </form>
    </section>
  );
};
