import axios, { AxiosResponse } from "axios";

const BASE_URL = 'http://deayloop.backend.test.starway.agency:8002/api/';

const handleResponse = (response: AxiosResponse) => {
  if (response.status !== 200) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.data;
};

export const get = <T>(url: string): Promise<T> => (
  axios.get<T>(BASE_URL + url)
    .then(handleResponse)
);
