<template>
  <div>
    <div class="pageTitle">
      <div class="divider">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div class="container">
      <section class="flex">
        <div class="flex-1">
          <p>Production</p>
          <News
            v-for="n in production"
            :key="n[0]"
            :data="n"
          />
        </div>
        <div class="flex-1">
          <p>Tour</p>
          <News
            v-for="n in tour"
            :key="n[0]"
            :data="n"
          />
        </div>
        <div class="flex-1">
          <p>Local</p>
          <News
            v-for="n in local"
            :key="n[0]"
            :data="n"
          />
        </div>
      </section>
    </div>
  </div>


</template>

<script>
import News from '~/components/news'
import graph from '~/static/graph.json'

const allArtists = Object.entries(graph.artists)
const news = graph.pages.news

export default {
  components: {
    News
  },

  data() {
    return {
      artists: allArtists.filter(([key, val]) => news.includes(key))
    }
  },

  computed: {
    production() {
      return this.artists.filter(([key, val]) => ['prod', 'production'].includes(val.type))
    },

    tour() {
      return this.artists.filter(([key, val]) => val.type === 'tour')
    },

    local() {
      return this.artists.filter(([key, val]) => val.type === 'local')
    }
  }
}
</script>

<style lang="sass">

.container
  padding-top: 50vh

.pageTitle
  background-image: url(/pages/home/bg.jpg)
  height: 50vh
  background-position: center
  background-size: cover
  position: fixed
  left: 0
  top: 0
  width: 100%
  z-index: -1
  pointer-events: none

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
