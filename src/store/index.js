import { reactive } from 'vue';

export const api = {
  baseUrl: 'http://localhost:8000/api/',
};

export const store = reactive({
  posts: [],
});
