import network from 'utils/network';
import { GET_WORKORDERS_BY_SITE, SET_LOADING } from 'actions/types';

// Get all wokrorders by site
export const getWorkordersBySite = (dateRange) => async (dispatch) => {
  const dates = dateRange.split(' ');
  dispatch({ type: SET_LOADING });
  try {
    const res = await network.getAllWorkordersBySite(dates[0], dates[1]);
    dispatch({
      type: GET_WORKORDERS_BY_SITE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
