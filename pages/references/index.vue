<template>
  <Content title="References">
    <div class="references">
      <div class="filters">
        <h4>Filter the references:</h4>
        <input
          v-model="filterValue"
          placeholder="Name..."
          type="search"
        >
        <button
          :class="{ active: filterType === 'prod' }"
          @click="filterBy('prod')">Production</button>
        <button
          :class="{ active: filterType === 'tour' }"
          @click="filterBy('tour')">Tour</button>
        <button
          :class="{ active: filterType === 'local' }"
          @click="filterBy('local')">Local</button>
        <button @click="resetFilter">Show all </button>
      </div>
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
      filterValue: '',
      filterType: undefined
    }
  },

  computed: {
    filter() {
      return this.filterValue.trim()
    },

    artists() {
      let segment = allArtists
      if (this.filterType) {
        segment = segment.filter(artist => {
          return artist[1].type === this.filterType
        })
      }
      if (this.filter.length) {
        segment = segment.filter(artist => {
          return artist[1].name.toLowerCase().indexOf(this.filter) >= 0
        })
      }

      return segment
    }
  },

  methods: {
    resetFilter() {
      this.filterType = undefined
    },

    filterBy(type) {
      this.filterType = type
      this.filterValue = ''
    }
  },
}
</script>


<style lang="sass" scoped>
.filters
  padding: 20px 0

  input
    background: transparent
    line-height: 1.5em
    border-bottom: 1px solid rgba(#fff, .4)
    color: white
    padding: 3px 0

    &:focus
      border-bottom-color: white

  button
    @apply text-white
    margin: 10px
    line-height: 1.5em
    padding: 4px

    &:hover,
    &.active
      border-bottom: 1px solid white
      padding-bottom: 3px

</style>


