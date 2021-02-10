import { SET_INNER_DOUGHNUT, SET_OUTER_DOUGHNUT } from 'actions/types';

export const setDoughnutFilter = (e) => {
  if (e.name === 'outer') return { type: SET_OUTER_DOUGHNUT, payload: e.value };
  else return { type: SET_INNER_DOUGHNUT, payload: e.value };
};
