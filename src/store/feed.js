import createAsyncSlice from './helper/createAsyncSlice';
import { PHOTOS_GET } from '../Api';

const feed = createAsyncSlice({
  name: 'feed',
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload.length === 0) {
        state.infinite = false;
      }
    },
    addPage(state) {
      state.pages++;
    },
    resetState(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.list = [];
      state.pages = 1;
      state.infinite = true;
    },
  },
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const { addPage, addPhotos, resetState: resetFeedState } = feed.actions;

export const fetchFeed = feed.asyncAction;

export const loadNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();
    const { payload } = await dispatch(
      fetchFeed({ page: feed.pages, total, user }),
    );
    dispatch(addPhotos(payload));
    dispatch(addPage());
  };

export default feed.reducer;
