import { PHOTO_POST } from '../Api';
import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'photoPost',
  fetchConfig: post => PHOTO_POST(post),
});

export const { resetState: resetPostState } = slice.actions;

export const postPhoto = slice.asyncAction;

export default slice.reducer;
