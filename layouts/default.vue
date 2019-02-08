<template>
  <div>
    <nav class="mainMenu">
      <div>
        <nuxt-link to="/">
          <img
            src="~/assets/logo.png"
            alt="System Provider">
        </nuxt-link>
      </div>
      <div style="flex: 1">
        <nuxt-link
          to="/"
          class="link"
        >Home<span>Work in progress</span></nuxt-link>
        <nuxt-link
          to="/company"
          class="link"
        >Company<span>Our force</span></nuxt-link>
        <nuxt-link
          to="/references"
          class="link"
        >References<span>What we did</span></nuxt-link>
      </div>
      <div class="pr-4">
        <nuxt-link
          to="/contact"
          class="link text-right -reverse"
        >Contact <span>Reach out to us</span></nuxt-link>
      </div>
    </nav>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(new Date)
  }
}
</script>


<style lang="sass">
html
  font-family: Arial, -apple-system , BlinkMacSystemFont, 'Helvetica Neue', sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  background: config('colors.black')

a
  @apply text-white no-underline

.container a
  display: inline-block
  font-size: .8rem
  border-bottom: 1px dotted rgba(#fff, .5)

  &:hover
    border-bottom: 1px dotted #fff

  &.border-none
    border: 0

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0

.mainMenu
  @apply flex flex-row items-center justify-between
  border-bottom: 1px solid rgba(#fff, .1)
  background: rgba(#151515, .8)
  height: 4rem
  overflow-x: hidden
  position: fixed
  left: 0
  top: 0
  width: 100%
  z-index: 100

  .link
    @apply px-4 py-2 relative font-bold no-underline
    font-size: 1.2rem

    &.nuxt-link-exact-active
      @apply text-grey-dark opacity-50

    span
      @apply absolute whitespace-no-wrap font-light italic font-serif inline-block pl-4 text-grey-dark opacity-0
      font-size: 1rem
      left: 0
      bottom: -.6rem
      transition: opacity 300ms

    &.-reverse
      span
        left: auto
        right: 0
        @apply pl-0 pr-4

    &:hover

      span
        @apply opacity-100

.markdown
  p
    @apply my-2
    max-width: 40rem

  ul
    @apply py-2
    list-style-type: '✅'
    li
      @apply my-2 pl-4

</style>
