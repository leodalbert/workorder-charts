import produce from 'immer';
import { SITE_GROUP_INFO } from 'actions/types';

export const initialState = {
  name: '',
  logo: '',
};

/* eslint-disable no-param-reassign */
const workorder = (state = initialState, action) =>
  produce(state, (draft) => {
    const { payload, type } = action;
    switch (type) {
      case SITE_GROUP_INFO:
        draft.logo = payload.logo;
        draft.name = payload.name;
        break;
      default:
        break;
    }
  });

export default workorder;
