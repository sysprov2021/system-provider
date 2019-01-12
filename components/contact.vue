<template>
  <div>
    <img
      :src="`/pages/contact/${img}`"
      :alt="name"
      width="80px"
    >
    <p>{{ name }}</p>
    <p>{{ mobile | clean }} - {{ mobile }}</p>
    <p>{{ tel | clean }} - {{ tel }}</p>
    <p>{{ mail }}</p>
  </div>
</template>

<script>
  export default {
    filters: {
      clean(value) {
        return value.replace(/-| /g, '')
      }
    },
    props: {
      img: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String,
      },
      mobile: {
        type: String,
        default: ''
      },
      tel: {
        type: String,
        default: ''
      },
      mail: {
        required: true,
        type: String,
      }
    }
  }
</script>

<style scoped>

</style>
