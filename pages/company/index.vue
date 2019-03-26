<template>
  <Content
    title="Company"
    page="company"
  >
    <div class="flex flex-col md:flex-row">
      <div class="sections flex flex-row md:flex-col justify-between md:justify-start">
        <div
          :class="{'is-active': selected == 'prod'}"
          class="sectionsItem"
          role="button"
          @click="select('prod')"
        >
          <img
            src="~/assets/icon_prod.svg"
            alt="Productions"
          >
        </div>
        <div
          :class="{'is-active': selected == 'local'}"
          class="sectionsItem"
          role="button"
          @click="select('local')"
        >
          <img
            src="~/assets/icon_local.svg"
            alt="Local"
          >
        </div>
        <div
          :class="{'is-active': selected == 'tour'}"
          class="sectionsItem"
          role="button"
          @click="select('tour')"
        >
          <img
            src="~/assets/icon_tour.svg"
            alt="Tour"
          >
        </div>

      </div>
      <div class="contents markdown">
        <div v-show="selected == 'prod'">
          <div v-html="html.prod" />
        </div>
        <div v-show="selected == 'local'">
          <div v-html="html.local" />
        </div>
        <div v-show="selected == 'tour'">
          <div v-html="html.tour" />
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import productionFm from './production.md'
import tourFm from './tour.md'
import localFm from './local.md'

export default {
  data() {
    return {
      html: {
        prod: productionFm.html,
        local: localFm.html,
        tour: tourFm.html,
      },
      selected: 'prod'
    }
  },

  methods: {
    select(key) {
      this.selected = key
    }
  }
}
</script>

<style lang="sass" scoped>

.sections
  @media screen and (max-width: config('screens.sm'))
    margin-bottom: 60px

  @media screen and (min-width: config('screens.sm'))
    padding-right: 20px

  &Item
    @apply p-2 pr-4 relative
    width: 100px

    &.is-active
      background: rgba(#fff, .1)
      border-radius: 5px

      &::after
        @apply absolute
        content: ''
        border: 20px solid transparent
        border-left-color: rgba(#fff, .1)
        right: -40px
        top: 50%
        transform: translateY(-50%)
        height: 40px
        width: 40px

        @media screen and (max-width: config('screens.sm'))
          top: 100%
          left: 50%
          right: 0
          transform: translate(-50%, 0px)
          border-color: transparent
          border-top-color: rgba(#fff, .1)



    img
      display: block
      width: 100%

.contents
  @apply px-4

</style>

