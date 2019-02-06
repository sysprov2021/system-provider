<template>
  <div>
    <div
      :style="bg"
      :class="{scrolled: scrolled}"
      class="pageTitleWrapper"
    >
      <h1
        v-if="title"
        class="pageTitle"
      >{{ title }}</h1>
      <div class="pageTitle">
        <slot name="title" />
      </div>
      <div class="divider">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content',

    props: {
      title: {
        type: String,
        default: undefined
      },
      page: {
        type: String,
        default: 'home'
      }
    },

    data() {
      return {
        scrolled: false
      }
    },

    computed: {
      bg() {
        return {
          backgroundImage: `url(/pages/${this.page}/bg.jpg)`
        }
      }
    },
    created () {
      if (process.browser)
        window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      if (process.browser)
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0;
      }
    },
  }
</script>

<style lang="sass" scoped>

.container
  padding-top: 50vh
  margin-top: 2rem
  @apply text-white

.pageTitleWrapper
  height: 50vh
  background-position: center
  background-size: cover
  position: fixed
  left: 0
  top: 0
  width: 100%
  z-index: -1
  pointer-events: none
  opacity: 1
  transition: opacity 500ms

  &.scrolled
    opacity: 0.3

  .pageTitle
    @apply text-center absolute
    top: 10vh
    padding-top: 5rem
    width: 100%
    color: white
    font-size: 3rem

  .divider
    position: absolute
    bottom: 0
    height: 5px
    @apply flex items-center flex-no-wrap justify-between
    width: 100%

    span
      width: 100%
      height: 100%

      &:nth-child(1)
        background: #701871

      &:nth-child(2)
        background: #2A686B

      &:nth-child(3)
        background: #887522

</style>
