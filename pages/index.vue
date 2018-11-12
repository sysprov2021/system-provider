<template>
  <section class="container">
    <div>
      <p>Production</p>
      {{ production }}
    </div>
    <div>
      <p>Tour</p>
      {{ tour }}
    </div>
    <div>
      <p>Local</p>
      {{ local }}
    </div>
  </section>
</template>

<script>
import artists from '~/static/graph.json'

export default {
  data() {
    return {
      artists: Object.entries(artists)
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
