import { reactive } from 'vue';

export const api = {
  baseUrl: window.location.toString().includes('boolpress')
    ? 'https://boolpress-admin.tizianonicolai.com/api/'
    : 'http://localhost:8000/api/',
};

export const store = reactive({
  posts: [],
});
