import produce from 'immer';
import { SET_INNER_DOUGHNUT, SET_OUTER_DOUGHNUT } from 'actions/types';

export const initialState = {
  doughnut1Filter: 'all',
  doughnut2Filter: 'Preventive Maintenance',
};

/* eslint-disable no-param-reassign */
const workorder = (state = initialState, action) =>
  produce(state, (draft) => {
    const { payload, type } = action;
    switch (type) {
      case SET_OUTER_DOUGHNUT:
        draft.doughnut1Filter = payload;
        break;
      case SET_INNER_DOUGHNUT:
        draft.doughnut2Filter = payload;
        break;
      default:
        break;
    }
  });

export default workorder;
