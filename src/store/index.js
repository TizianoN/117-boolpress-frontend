import { reactive } from 'vue';

export const api = {
  baseUrl: window.location.toString().includes('digitalocean') ? process.env.API_URL : 'http://127.0.0.1:8000/api/',
};

export const store = reactive({
  posts: [],
});
