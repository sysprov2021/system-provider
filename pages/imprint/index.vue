<template>
  <Content
    title="Imprint"
    page="imprint_agb"
  >
    <div
      class="markdown"
      v-html="content"/>
  </Content>
</template>

<script>
import content from './content.md'

  export default {
    data() {
      return {
        content: content.html
      }
    }
  }
</script>

<style scoped>

</style>
