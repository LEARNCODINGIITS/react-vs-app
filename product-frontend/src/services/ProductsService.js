
import axios from 'axios';

const REST_BASE_URL_API ='http://localhost:1221/api/products';

export const products=()=>{return axios.get(REST_BASE_URL_API);}

export const createProduct =(product)=>{return axios.post(REST_BASE_URL_API,product)};

export const getProduct=(productId)=>{return axios.get(REST_BASE_URL_API+'/'+productId)};

export const updateProduct=(productId, product)=>{return axios.put(REST_BASE_URL_API+'/'+productId,product)};

export const deleteProduct=(productId)=>{return axios.delete(REST_BASE_URL_API+'/'+productId)};
