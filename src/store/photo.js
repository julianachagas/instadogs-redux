import { PHOTO_GET } from '../Api';

// without using the toolkit and createSlice, only redux

// constants
const FETCH_PHOTO_STARTED = 'photo/fetchStarted';
const FETCH_PHOTO_SUCCESS = 'photo/fetchSuccess';
const FETCH_PHOTO_FAILED = 'photo/fetchFailed';

// action creators
const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
});

const fetchPhotoSuccess = data => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});

const fetchPhotoFailed = error => ({
  type: FETCH_PHOTO_FAILED,
  payload: error,
});

// initial state
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// reducer
const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return { ...state, loading: true, data: null, error: null };
    case FETCH_PHOTO_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_PHOTO_FAILED:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

// async action
export const fetchPhoto = id => async dispatch => {
  try {
    dispatch(fetchPhotoStarted());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `Something went wrong. Status: ${response.status} - ${response.statusText}. ${data.message}`,
      );
    }
    dispatch(fetchPhotoSuccess(data));
  } catch (error) {
    dispatch(fetchPhotoFailed(error.message));
  }
};

export default photo;
