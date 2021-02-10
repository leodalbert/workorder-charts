import axios from 'axios';
import { BASE_URL } from './environment';
import { inDev } from './HelperFunctions';

axios.interceptors.response.use((response) => response.data);
if (inDev()) {
  axios.defaults.headers.common = {
    Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN,
  };
}

const network = () => {
  // const baseUrl = BASE_URL;

  // get all workorders by site
  const getAllWorkordersBySite = (techEmail, studioId) => {
    // const config = { headers };
    return axios.get(
      `https://api.onuma.com/137/items/workorder?limit=3000&fields=*&filter[building.site.site_group][eq]=10&sort=-created_on`
    );
  };
  return {
    getAllWorkordersBySite,
  };
};

const networkServicee = network();
export default networkServicee;
