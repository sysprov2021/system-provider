<template>
  <nuxt-link
    :to="`/references/${key}`"
    class="border-none w-1/3">
    <div class="p-3 relative reference">
      <img
        :src="titleImgPath"
        :alt="info.name"
        class="w-full img"
      >
      <div class="title">
        <h2 :class="type">{{ info.name }}</h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      data:{
       type: Array,
       default: () => []
      },
      type: {
        type: String,
        default: ''
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
  @apply absolute px-2 py-1
  max-width: 90%
  top: 20px
  left: 20px
  z-index: 3
  font-size: 1.4rem

  h2
    @apply inline px-2
    line-height: 1.2em

    &.prod
      background: #701871

    &.tour
      background: #2A686B

    &.local
      background: #887522

.date
  @apply inline-block absolute px-2 py-1 bg-black
  right: 20px
  bottom: 20px
  font-size: 1.2rem
  z-index: 3
  &.prod
    background: #701871

  &.tour
    background: #2A686B

  &.local
    background: #887522

.reference
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
