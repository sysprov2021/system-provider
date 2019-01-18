<template>
  <div class="p-3 relative">
    <img
      :src="titleImgPath"
      :alt="name"
      class="w-full "
    >
    <h2 class="title">{{ name }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      data:{
       type: Array,
       default: () => []
      }
    },

    data: function() {
      return {
        name: this.data[0],
        value: this.data[1]
      };
    },

    computed: {
      titleImgPath() {
        return this.value.title ? `/img/${this.name}/small_${this.value.title}` : '/title-default.jpeg'
      }
    }
  }
</script>

<style scoped>

.title {
  @apply absolute px-2 py-1;
  top: 20px;
  left: 20px;
  background: white;
}

</style>
