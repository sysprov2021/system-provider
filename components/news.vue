<template>
  <nuxt-link :to="`/references/${key}`">
    <div class="p-3 relative news">
      <img
        :src="titleImgPath"
        :alt="info.name"
        class="w-full img"
      >
      <h2 class="title">{{ info.name }}</h2>
    </div>
  </nuxt-link>
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
        key: this.data[0],
        info: this.data[1]
      }
    },

    computed: {
      titleImgPath() {
        return this.info.title ? `/img/${this.key}/small_${this.info.title}` : '/title-default.jpeg'
      }
    }
  }
</script>

<style lang="sass" scoped>

.title
  @apply absolute px-2 py-1 bg-black
  top: 20px
  left: 20px
  z-index: 3

.news
  &::before,
  &::after
    transition: all .6s ease
    content: ""
    position: absolute
    width: 80%
    height: 80%
    left: 10%
    top: 10%
    z-index: 2
    pointer-events: none

  &::before
    border-left: 1px solid rgba(255,255,255,.8)
    border-right: 1px solid rgba(255,255,255,.8)
    transform: scale(1, 0)

  &::after
    border-top: 1px solid rgba(255,255,255,.8)
    border-bottom: 1px solid rgba(255,255,255,.8)
    transform: scale(0, 1)

  &:hover
    &::before,
    &::after
      transform: scale(1, 1)

  img
    filter: grayscale(100%)
    transition: filter 300ms

    &:hover
      filter: grayscale(0%)
</style>
