import produce from 'immer';

export const initialState = {
  doughnut1Filter: 'all',
  doughnut2Filter: 'Preventive Maintenance',
};

/* eslint-disable no-param-reassign */
const workorder = (state = initialState, action) =>
  produce(state, (draft) => {
    const { payload, type } = action;
    switch (type) {
      default:
        break;
    }
  });

export default workorder;
