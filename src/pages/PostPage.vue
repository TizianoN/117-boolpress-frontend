<script>
  import axios from 'axios';
  import { api } from '../store';

  import PostCard from '../components/PostCard.vue';

  export default {
    data() {
      return {
        post: null,
      };
    },

    components: { PostCard },

    created() {
      const postSlug = this.$route.params.slug;
      axios.get(api.baseUrl + `posts/${postSlug}`).then((response) => {
        if (response.data.success) {
          this.post = response.data.result;
        } else {
          this.$router.push({ name: 'not-found' });
        }
      });
    },
  };
</script>

<template>
  <div class="row">
    <post-card v-if="post" :post="post" :isDetail="true" />
  </div>
</template>

<style lang="scss" scoped></style>
