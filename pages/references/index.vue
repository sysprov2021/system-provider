<template>
  <div>
    <h1>References</h1>
    <ul>
      <li
        v-for="(artist, key) in artists"
        :key="key"
      >
        {{ artist }}
      </li>
    </ul>
  </div>
</template>

<script>
import graph from '~/static/graph.json'

const allArtists = Object.entries(graph.artists)

export default {
  data() {
    return {
      artists: allArtists
    }
  }
}
</script>

