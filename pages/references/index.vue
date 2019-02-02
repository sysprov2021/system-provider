<template>
  <Content title="References">
    <ul>
      <li
        v-for="[name, meta] in artists"
        :key="name"
      >
        <h2>{{ name }}</h2>
        <p>{{ meta }}</p>
        <nuxt-link :to="`/references/${name}`">VISIT</nuxt-link>
      </li>
    </ul>
  </Content>
</template>

<script>
const allArtists = Object.entries($graph.artists)

export default {
  data() {
    return {
      artists: allArtists
    }
  }
}
</script>

