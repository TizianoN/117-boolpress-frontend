<script>
  import PostCard from '../components/PostCard.vue';

  import axios from 'axios';
  import { api } from '../store';

  export default {
    data() {
      return {
        title: 'Filtri avanzati',

        searchedText: '',
        tags: [],
        categories: [],
        posts: [],
      };
    },

    components: { PostCard },

    methods: {
      fetchCategories() {
        axios.get(api.baseUrl + 'categories').then((response) => {
          this.categories = response.data.result;
        });
      },

      fetchTags() {
        axios.get(api.baseUrl + 'tags').then((response) => {
          this.tags = response.data.result;
        });
      },

      fetchPosts() {
        axios
          .get(api.baseUrl + 'posts/advanced-filters', {
            params: {
              tags: this.activeTagsId,
              categories: this.activeCategoriesId,
              searchedText: this.searchedText,
            },
          })
          .then((response) => {
            this.posts = response.data.result;
          });
      },

      handleTagClick(tag) {
        tag.active = !tag.active;
        this.fetchPosts();
      },

      handleCategoryClick(category) {
        this.categories.forEach((_category) => {
          _category.active = _category.id == category.id;
        });

        this.fetchPosts();
      },

      handleSearchKeyup() {
        this.fetchPosts();
      },
    },

    computed: {
      activeTagsId() {
        let activeTags = this.tags.filter((tag) => tag.active);
        let activeTagsId = activeTags.map((tag) => tag.id);
        return activeTagsId;
      },

      activeCategoriesId() {
        let activeCategories = this.categories.filter((category) => category.active);
        let activeCategoriesId = activeCategories.map((category) => category.id);
        return activeCategoriesId;
      },
    },

    created() {
      this.fetchCategories();
      this.fetchTags();
      this.fetchPosts();
    },
  };
</script>

<template>
  <h1 class="mb-5">{{ title }}</h1>

  <section>
    <div class="row">
      <div class="col-3">
        <h2>Ricerca</h2>
        <input type="text" class="form-control" v-model="searchedText" @change="handleSearchKeyup()" />
        <button class="btn btn-primary">Cerca</button>
        <hr />
        <h2>Tags</h2>

        <span
          :style="'background-color: ' + tag.color"
          :class="tag.active ? 'active' : ''"
          class="badge rounded-pill me-1"
          v-for="tag in tags"
          @click="handleTagClick(tag)">
          {{ tag.label }}
        </span>

        <hr />
        <h2>Categories</h2>

        <span
          :style="'background-color: ' + category.color"
          :class="category.active ? 'active' : ''"
          class="badge me-1"
          v-for="category in categories"
          @click="handleCategoryClick(category)">
          {{ category.label }}
        </span>
      </div>

      <div class="col-9">
        <div class="row row-cols-3 g-4" v-if="posts.length">
          <post-card v-for="post in posts" :post="post" />
        </div>

        <h2 v-else>Nessun risultato trovato</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .badge {
    cursor: pointer;

    &:not(.active) {
      // filter: grayscale(1);
      background-color: gray !important;
    }
  }
</style>
