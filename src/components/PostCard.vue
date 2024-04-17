<script>
  export default {
    props: { post: Object, isDetail: Boolean },

    computed: {
      abstract() {
        const content = this.post.content;
        return content.length > 45 && !this.isDetail ? content.substr(0, 45) + '...' : content;
      },
    },
  };
</script>

<template>
  <div class="col">
    <div v-if="!isDetail" class="card h-100">
      <img :src="post.image ? post.image : 'https://placehold.co/600x400'" class="card-img-top" />

      <div class="card-body">
        <router-link
          :to="{ name: 'posts.filter-by-category', params: { category_id: post.category.id } }"
          :style="'background-color: ' + post.category.color"
          class="badge mb-2">
          {{ post.category.label }}
        </router-link>
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ abstract }}
        </p>

        <router-link :to="{ name: 'posts.show', params: { slug: post.slug } }" class="btn btn-primary">
          Vedi altro
        </router-link>
      </div>
      <div class="card-footer" v-if="post.tags.length">
        <span :style="'background-color: ' + tag.color" class="badge me-2" v-for="tag in post.tags">{{
          tag.label
        }}</span>
      </div>
    </div>

    <div v-else>
      <h1>{{ post.title }}</h1>
      <div>
        <span :style="'background-color: ' + post.category.color" class="badge mb-2">
          {{ post.category.label }}
        </span>
      </div>
      <div class="mb-5">
        <span :style="'background-color: ' + tag.color" class="badge me-2" v-for="tag in post.tags">{{
          tag.label
        }}</span>
      </div>
      <p class="card-text float-start">
        <img
          :src="post.image ? post.image : 'https://placehold.co/600x400'"
          class="image-fluid float-start w-50 me-2" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit rerum eum rem cupiditate consequatur atque
        harum! Enim modi voluptatem consequatur corrupti. Vero iure necessitatibus autem laboriosam ex dolorem deserunt?
        {{ abstract }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
