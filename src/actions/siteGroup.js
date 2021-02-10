import network from 'utils/network';
import { SITE_GROUP_INFO } from 'actions/types';

// get name and logo of siteGroup
export const getSiteGroupInfo = () => async (dispatch) => {
  try {
    const res = await network.getSiteGroupInfo();
    dispatch({
      type: SITE_GROUP_INFO,
      payload: res.data[0],
    });
  } catch (err) {
    console.error(err);
  }
};
