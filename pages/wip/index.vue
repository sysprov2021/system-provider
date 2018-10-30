<template>
  <div>
    <h1>Work In Progress</h1>
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
import artists from '~/static/graph.json'

export default {
  data() {
    return {
      artists
    }
  }
}
</script>

