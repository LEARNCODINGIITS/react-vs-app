
import axios from 'axios';

const REST_BASE_URL_API ='http://localhost:1221/api/products';

export const welcome=()=>{
    return axios.get(REST_BASE_URL_API+'/welcome');
}
