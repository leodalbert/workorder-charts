import network from 'utils/network';
import { GET_WORKORDERS_BY_SITE } from 'actions/types';

// Get all wokrorders by site
export const getWorkordersBySite = () => async (dispatch) => {
  try {
    const res = await network.getAllWorkordersBySite();
    console.log(res.data[0]);
    dispatch({
      type: GET_WORKORDERS_BY_SITE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
