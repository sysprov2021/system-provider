<template>
  <div>
    <img
      :src="`/img/${name}/small_${value.title}`"
      :alt="name"
    >
    <h2>{{ name }}</h2>
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
    }
  }
</script>

<style scoped>

</style>
