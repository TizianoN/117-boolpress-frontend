<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    data() {
      return {
        title: 'Boolpress',
      };
    },

    components: { AppHeader },
  };
</script>

<template>
  <app-header :title="title" />

  <div class="container mt-5 pb-5">
    <router-view />
  </div>
</template>

<style lang="scss">
  @use './scss/general.scss' as *;
</style>

!!!
