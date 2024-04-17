<script>
  import { parse } from 'vue/compiler-sfc';
  import PostList from '../components/PostList.vue';

  export default {
    data() {
      return {
        title: 'Hello world',
      };
    },

    computed: {
      category_id() {
        return this.$route.params.category_id ? parseInt(this.$route.params.category_id) : false;
      },
    },

    components: { PostList },
  };
</script>

<template>
  <post-list :category_id="category_id" :key="category_id" />
</template>

<style lang="scss" scoped></style>
