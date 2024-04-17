<script>
  export default {
    props: { pagination: Array },
    emit: ['change-page'],
  };
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li
        v-for="link in pagination"
        @click="$emit('change-page', link.url)"
        :class="{
          active: link.active,
          disabled: !link.url,
        }"
        class="page-item">
        <a class="page-link" href="javascript:void(0)" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
