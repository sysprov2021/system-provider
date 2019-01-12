<template>
  <div>
    <h1>Contacts</h1>

    <h2>Managing Director and Owner</h2>
    <contact
      img="andreas_rescheneder.jpg"
      name="Andreas Rescheneder"
      mobile="+43-676-955 59 69"
      tel="+43-1-897 29 69-0"
      mail="andreas@system-provider.com"
    />
    <h2>Production Manager</h2>
    <contact
      img="rene_kraus.jpg"
      name="Rene Kraus"
      mobile="+43-676-955 59 70"
      tel="+43-1-897 29 69-44"
      mail="rene@system-provider.com"
    />
    <contact
      img="andreas_busch.jpg"
      name="Andreas Busch"
      mobile="+43-676-727 77 87"
      tel="+43-1-897 29 69-43"
      mail="andreas.busch@system-provider.com"
    />
    <contact
      img="andreas_huebner.jpg"
      name="Andreas Hübner"
      mobile="+43-676-95 559 68"
      tel="+43-1-897 29 69-46"
      mail="huebner@system-provider.com"
    />
    <contact
      img="lisa_schwarzenbacher.jpg"
      name="Lisa Schwarzenbacher"
      mobile="+43-699-146 354 30"
      tel="+43-1-897 29 69-33"
      mail="lisa@system-provider.com"
    />
    <h2>Artist Managment</h2>
    <contact
      img="reingard_goessweiner.jpg"
      name="Reingard Gössweiner"
      tel="+43-1-897 29 69-39"
      mail="artist@system-provider.com"
    />
    <h2>Production Assistant</h2>
    <contact
      img="julia_gruber.jpg"
      name="Julia Gruber"
      mobile="+43-676-95 520 10"
      tel="+43-1-897 29 69-41"
      mail="julia@system-provider.com"
    />
    <h2>Accounting</h2>
    <contact
      img="christa_machulka.jpg"
      name="Christa Machulka"
      tel="+43-1-897 29 69-50"
      mail="buchhaltung@system-provider.com"
    />
  </div>
</template>

<script>
  import Contact from '~/components/contact'

  export default {
    components: {
      Contact
    }
  }
</script>

<style scoped>


</style>
