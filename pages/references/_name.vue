<template>
  <div>
    <h1>ARTIST</h1>
    {{ artist }}
  </div>
</template>

<script>
  import graph from '~/static/graph.json'

  export default {
    data() {
      return {
        artist: graph.artists[this.$route.params.name]
      }
    }
  }
</script>

<style scoped>

</style>
