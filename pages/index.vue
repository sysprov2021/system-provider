<template>
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

<style>

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
