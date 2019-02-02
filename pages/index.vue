<template>
  <Content>
    <template slot="title">
      <div class="welcome">
        <h1>Welcome</h1>
        <h2>to System Provider</h2>
      </div>
    </template>
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
  </Content>
</template>

<script>
import News from '~/components/news'

const allArtists = Object.entries($graph.artists)
const news = $graph.pages.news

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
.welcome
  @apply text-left pl-6

  h1
    font-size: 3rem

  h2
    @apply font-serif italic font-normal
    font-size: 2rem
</style>
