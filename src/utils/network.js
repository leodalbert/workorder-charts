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
      `/26/api/items/workorder?limit=999999&fields=*&filter[building.site][eq]=339`
    );
  };
  return {
    getAllWorkordersBySite,
  };
};

const networkServicee = network();
export default networkServicee;
