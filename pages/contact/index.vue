<template>
  <Content title="Contact" page="contact">
    <div class="md:flex justify-center">
      <div class="flex-1" style="min-width: 300px; max-width: 400px">
        <h2>Managing Director and Owner</h2>
        <Contact
          img="andreas_rescheneder.jpg"
          name="Andreas Rescheneder"
          mobile="+43-676-955 59 69"
          tel="+43-1-897 29 69-0"
          mail="andreas@system-provider.com"
        />
        <h2>Production Manager</h2>
        <Contact
          img="rene_kraus.jpg"
          name="Rene Kraus"
          mobile="+43-676-955 59 70"
          tel="+43-1-897 29 69-44"
          mail="rene@system-provider.com"
        />
        <Contact
          img="andreas_busch.jpg"
          name="Andreas Busch"
          mobile="+43-676-727 77 87"
          tel="+43-1-897 29 69-43"
          mail="andreas.busch@system-provider.com"
        />
        <Contact
          img="bjoern_ladehoff.jpeg"
          name="Björn „Buddle“ Ladehoff"
          tel="+43-1-897 29 69-47"
          mobile="+49-151-50 42 94 06"
          mail="buddle@system-provider.com"
        />
        <Contact
          img="Matthias_Pfeiffer.jpg"
          name="Matthias Pfeiffer"
          tel="+43-1-897 29 69-46"
          mobile="+43-650-313 00 34"
          mail="matthias@system-provider.com"
        />
        <Contact
          img="markus_messner.jpg"
          name="Markus Messer"
          tel="+43-1-897 29 69-45"
          mail="markus@system-provider.com"
        />
        <h2>Artist Management</h2>
        <Contact
          img="reingard_goessweiner.jpg"
          name="Reingard Gössweiner"
          tel="+43-1-897 29 69-39"
          mail="artist@system-provider.com"
        
        />
        <h2>Backoffice / Prod. Assistant</h2>
          <Contact
          img="julia_gruber.jpg"
          name="Julia Gruber"
          mobile="+43-676-955 59 68"
          tel="+43-1-897 29 69-41"
          mail="julia@system-provider.com"
        />
        <Contact
          img="lidia_petrovski.jpeg"
          name="Lidia Petrovski - in Babypause"
          mail="lidia@system-provider.com"
        />
        <Contact
          img="milena_gutdeutsch.jpg"
          name="Milena Gutdeutsch"
          tel="+43-1-897 29 69-33"
          mail="milena@system-provider.com"
        />
        <Contact
          img="lukas_hasitschka.jpg"
          name="Lukas Hasitschka"
          tel="+43-1-897 29 69-48"
          mail="lukas@system-provider.com"
        />
        <h2>Accounting</h2>
        <Contact
          img="jana_ristic.jpeg"
          name="Sladjana „Jana“ Ristic"
          tel="+43-1-897 29 69-50"
          mail="buchhaltung@system-provider.com"
        />
      </div>
      <div class="contactDetails flex-1">
        <div>
          <h2>SPG System Provider Production Group GmbH</h2>
          <br />
          <p>Karolinengasse 21</p>
          <p>A-1040 Vienna, Austria</p>
          <br />
          <p><a href="tel:+43189729690">tel: +43-1-897 29 69-0</a></p>
          <p>
            <a href="mailto:office@system-provider.com"
              >e-mail: office@system-provider.com</a
            >
          </p>
          <br />
          <p>due to the pandemic we are partly working from home. </p>
          <p>please do not hesitate to contact us via phone and email. </p>
          <br />
          <p>VAT No. ATU 73694317</p>
          <p>Commercial register no. FN 497309m /Handelsgericht Wien</p>
          <p>Member of the chamber of commerce</p>
          <br />
          <h2>Mitglied bei:</h2>
          <br />
           <img src="~/assets/livecom_logo1.png" width="302px">
          </p>
          <img src="https://www.oethg.at/wp-content/uploads/2019/02/oethg_logo.png" height="173,16px" width="302px">
          </p>
          <img src="https://www.vplt.org/sites/all/themes/vpltemplate/site/img/logo.png">
          </p>
          <img src="https://i2.wp.com/verband.dthg.de/wp-content/uploads/2021/09/05_Zeichenflaeche-1-Kopie-3-1.png?w=409&ssl=1" width="302px">
          </p>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5420574291384!2d16.36902400000001!3d48.215436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07a350d46955%3A0x72bd768fd44a558b!2ssystem+provider+Theater+%26+Tournee+Produktions+GmbH!5e0!3m2!1sde!2sat!4v1422463340108"
            style="border:0"
            height="400"
            class="w-auto"
            frameborder="0"
          />
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import Contact from "~/components/contact";

export default {
  components: {
    Contact
  }
};
</script>

<style lang="sass" scoped>
@media (min-width: 800px)
  .contactDetails > div
    @apply px-8 ml-4
    border-left: 1px solid rgba(#fff, 5)

iframe
  width: 100%
</style>
