<template>
  <Content>
    <template slot="title">
      <div class="welcome">
        <h1>Welcome</h1>
        <h2>to System Provider</h2>
        <h4>temporary new office hours</h4>
        <h5>Mon-Fri: 10-16</h5>
      </div>
    </template>
    <section class="md:flex justify-center">
      <div class="flex-1">
        <div class="groupTitle text-center">
          <img
            src="~/assets/icon_prod.svg"
            alt="Production">
          <p>Production</p>
        </div>
        <News
          v-for="n in production"
          :key="n[0]"
          :data="n"
          type="prod"
        />
      </div>
      <div class="flex-1">
        <div class="groupTitle text-center">
          <img
            src="~/assets/icon_tour.svg"
            alt="Tour Consulting">
          <p>Tour Consulting</p>
        </div>
        <News
          v-for="n in tour"
          :key="n[0]"
          :data="n"
          type="tour"
        />
      </div>
      <div class="flex-1">
        <div class="groupTitle text-center">
          <img
            src="~/assets/icon_local.svg"
            alt="Local Productions">
          <p>Local Productions</p>
        </div>
        <News
          v-for="n in local"
          :key="n[0]"
          :data="n"
          type="local"
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

.groupTitle
  img
    width: 100px
  p
    @apply m-2 mt-6 uppercase font-bold
</style>
