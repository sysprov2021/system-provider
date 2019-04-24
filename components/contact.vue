<template>
  <div class="contact">
    <div class="flex">
      <div>
        <img
          :src="`/pages/contact/${img}`"
          :alt="name"
          class="avatar"
        >
      </div>
      <div class="meta">
        <p><strong>{{ name }}</strong></p>
        <ul>
          <li>
            <a :href="'tel:' + mobile | clean">{{ mobile }}</a>
          </li>
          <li>
            <a :href="'tel:' + tel | clean">{{ tel }}</a>
          </li>
          <li>
            <a :href="'mailto:' + mail">{{ mail }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    filters: {
      clean(value) {
        return value.replace(/-| /g, '')
      }
    },
    props: {
      img: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String,
      },
      mobile: {
        type: String,
        default: ''
      },
      tel: {
        type: String,
        default: ''
      },
      mail: {
        required: true,
        type: String,
      }
    }
  }
</script>

<style lang="sass" scoped>
.contact
  @apply my-1 p-1 mb-4

.meta
  @apply px-2

  ul
    list-style: none
    padding: 1rem 0
    line-height: 1.4rem

.avatar
  width: 100px
</style>
