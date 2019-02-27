<template>
  <Content title="References">
    <div class="references">
      <Reference
        v-for="artist in artists"
        :key="artist[0]"
        :data="artist"
        :type="artist[1].type"
      />
    </div>
  </Content>
</template>

<script>
import Reference from '~/components/reference'
const allArtists = Object.entries($graph.artists)

export default {

  components: {
    Reference
  },

  data() {
    return {
      artists: allArtists
    }
  },
}
</script>


<style lang="sass" scoped>
.references

</style>


