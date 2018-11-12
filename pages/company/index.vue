<template>
  <div>
    <div v-html="html" />
  </div>
</template>

<script>
import fm from './company.md'

  export default {
    data() {
      return {
        html: fm.html
      }
    }
  }
</script>
