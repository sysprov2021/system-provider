<template>
  <Content
    title="Company"
    page="company"
  >
    <div v-html="html" />
  </Content>
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
