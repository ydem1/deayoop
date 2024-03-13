import axios from "axios";

const BASE_URL = 'http://deayloop.backend.test.starway.agency:8002/api/';

export const get = <T>(url: string): Promise<T> => (
  axios.get<T>(BASE_URL + url)
    .then(response => response.data)
);
