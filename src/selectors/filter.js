import { initialState } from 'reducers/filter';

export const selectState = (state) => state.filter || initialState;

export const selectDoughnut1Filter = (state) =>
  selectState(state).doughnut1Filter;
export const selectDoughnut2Filter = (state) =>
  selectState(state).doughnut2Filter;
