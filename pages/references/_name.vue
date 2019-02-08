<template>
  <Content
    :img="imgPath"
    full="true"
  >
    <template>
      <div class="artistName">
        <h1>{{ artist.name }}</h1>
      </div>
    </template>
    <div class="flex">
      <div class="w-2/3">
        <h2>{{ artist.date }} / {{ artist.location }}</h2>
        <div
          class="markdown"
          v-html="content"
        />
        <div class="grid">
          <div
            v-for="(video, index) in artist.videos"
            :key="index"
            class="item"
          >
            <div class="content">
              <iframe
                :src="video"
                width="295"
                height="166"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen />
            </div>
          </div>
        </div>
        <div class="grid">
          <div
            v-for="image in artist.images"
            :key="image"
            class="item"
          >
            <div class="content">
              <img
                :src="`/img/${key}/${image}`"
                alt="artist.name"
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul class="list-reset pl-2 border-l-2">
          <li
            v-for="link in artist.links"
            :key="link.title"
          >
            <a :href="link.url">{{ link.title }}</a>
          </li>
          <li v-if="artist.tickets">
            <a :href="artist.tickets">Tickets</a>
          </li>
        </ul>
      </div>
    </div>
  </Content>
</template>
<script>

export default {
  data() {
    const key = this.$route.params.name
    return {
      key,
      artist: $graph.artists[key],
      content: require(`~/data/artists/${key}/content.md`).html
    }
  },

  computed: {
    imgPath() {
      return this.artist.bg ? `${this.$route.params.name}/${this.artist.bg}` : undefined
    }
  },

  mounted() {
    // let allItems
    // let x
    // let grid

    // function resizeGridItem(item){
    //   const grid = document.getElementsByClassName("grid")[0];
    //   const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    //   const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    //   const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    //   item.style.gridRowEnd = "span "+rowSpan;
    // }

    // function resizeAllGridItems(){
    //   allItems = document.getElementsByClassName("item");
    //   for(x=0;x<allItems.length;x++){
    //       resizeGridItem(allItems[x]);
    //   }
    // }

    // window.addEventListener("resize", resizeAllGridItems);

    // allItems = document.getElementsByClassName("item");
    // // for(x=0;x<allItems.length;x++){
    // //   imagesLoaded( allItems[x], resizeInstance);
    // // }

    // function resizeInstance(instance){
    //   item = instance.elements[0];
    //   resizeGridItem(item);
    // }

    // resizeAllGridItems()
  }
}
</script>

<style lang="sass" scoped>
.artistName
  position: absolute
  top: 85vh
  @apply bg-black px-4
  font-size: 2rem
  left: 0
  transform: translateY(-2rem)

.grid
  display: grid
  // grid-template-columns: 1fr 1fr 1fr
  grid-template-columns: repeat(auto-fill, minmax(150px,1fr))
  grid-gap: 1.5rem
  // grid-auto-rows: 30px
</style>
