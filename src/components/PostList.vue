<script>
  import { api, store } from '../store';
  import axios from 'axios';

  import PostCard from './PostCard.vue';
  import PaginationUi from './ui/PaginationUi.vue';

  export default {
    data() {
      return {
        store,
        pagination: [],
        category: null,
      };
    },

    props: { category_id: [Number, Boolean] },

    computed: {
      postsEndpoint() {
        if (this.category_id) {
          return api.baseUrl + 'posts-by-category/' + this.category_id;
        } else {
          return api.baseUrl + 'posts';
        }
      },
    },

    methods: {
      fetchPosts(endpoint = this.postsEndpoint) {
        axios.get(endpoint).then((response) => {
          if (!response.data.success) {
            this.$router.push({ name: 'not-found' });
          }

          this.category = response.data.category;
          store.posts = response.data.result.data;
          this.pagination = response.data.result.links;
        });
      },
    },

    components: { PostCard, PaginationUi },

    created() {
      this.fetchPosts();
    },
  };
</script>

<template>
  <h1 class="mb-5">{{ category_id ? 'Categoria ' + category.label : 'Blog' }}</h1>

  <pagination-ui @change-page="fetchPosts" :pagination="pagination" />

  <div class="row row-cols-4 g-3">
    <post-card v-for="post in store.posts" :post="post" :key="post.id" />
  </div>

  <pagination-ui @change-page="fetchPosts" :pagination="pagination" class="mt-3" />
</template>

<style lang="scss" scoped></style>
