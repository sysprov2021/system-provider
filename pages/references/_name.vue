<template>
  <Content title="Artist">
    {{ artist }}
  </Content>
</template>

<script>
export default {
  data() {
    return {
      artist: $graph.artists[this.$route.params.name]
    }
  }
}
</script>

<style scoped>

</style>
