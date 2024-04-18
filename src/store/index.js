import { reactive } from 'vue';

export const api = {
  baseUrl: window.location.toString().contains('localhost')
    ? 'http://localhost:8000/api/'
    : 'https://admin-boolpress.tizianonicolai.com/api/',
};

export const store = reactive({
  posts: [],
});
