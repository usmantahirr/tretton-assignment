import axios from 'axios';

import { errorResponseHandler, successResponseHandler } from './interceptors';
import { API_BASE_URL } from '../config';

const contentType = {
  json: 'application/json',
  multipart: 'multipart/form-data',
};

export default class API {
  constructor(
    config = {
      headers: { contentType: contentType.json },
    }
  ) {
    this.config = {};
    this.instance = null;

    // In case we are using login or authentication system
    const token = window.localStorage.getItem('token');
    this.config = {
      baseURL: config.baseURL || API_BASE_URL,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': config.headers.contentType || contentType.json,
      },
      timeout: 20000,
    };

    this.instance = axios.create(this.config);
    this.instance.interceptors.response.use(successResponseHandler, errorResponseHandler);
  }

  get(url, id, params) {
    let endpoint = url;
    if (id) {
      endpoint += `/${id}`;
    }
    return this.instance.get(endpoint, { params });
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  delete(url, id) {
    return this.instance.delete(`${url}/${id}`);
  }

  put(url, body, id) {
    let endpoint = url;
    if (id) {
      endpoint += `/${id}`;
    }
    return this.instance.put(endpoint, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }
}
