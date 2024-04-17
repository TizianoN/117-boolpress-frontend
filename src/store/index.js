import { reactive } from 'vue';

export const api = {
  baseUrl: process.env.APP_FRONTOFFICE_URL ? process.env.APP_FRONTOFFICE_URL + '/api/' : 'http://localhost:8000/api/',
};

export const store = reactive({
  posts: [],
});
