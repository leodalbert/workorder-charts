import produce from 'immer';
import { GET_WORKORDERS_BY_SITE } from 'actions/types';

export const initialState = {
  workorders: [],
  loading: true,
};

/* eslint-disable no-param-reassign */
const workorder = (state = initialState, action) =>
  produce(state, (draft) => {
    const { payload, type } = action;
    switch (type) {
      case GET_WORKORDERS_BY_SITE:
        draft.workorders = payload;
        draft.loading = false;
        break;
      default:
        break;
    }
  });

export default workorder;
