<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-app-bar
      fixed
      app
    >
      <v-img
        id="bandLogo"
        max-width="45"
        style="filter: invert(100%);"
        :src="require('static/logos/_broken_accord/logo-dark-vector.png')"
        @click="$vuetify.goTo('#home', { offset: 50 })"
      />
      <v-spacer />
      <v-toolbar-title v-text="'BROKEN / ACCORD'" class="font-weight-bold heading" style="margin-left: -35px" />
      <v-spacer />
    </v-app-bar>

    <!-- Main Content -->
    <carousel id="home" />
<!--    <song-demo id="demo" class="mt-10" />-->
    <listen id="listen" class="mt-10" />
    <v-row justify="center">
      <email-collection class="mx-8" style="max-width: 600px" />
    </v-row>
    <contact id="contact" class="mt-10" />
    <social id="social" class="mt-10" />
    <biography id="biography" class="mt-10" />

    <!-- Footer -->
    <v-footer height="60" class="mt-4">
      <v-spacer />
      <v-card
        width="100"
        color="transparent"
        flat
        @click="$vuetify.goTo('#home', { offset: 50 })"
      >
        <v-layout justify-center>
          <v-icon>mdi-chevron-up</v-icon>
        </v-layout>
        <v-layout justify-center>
          Back to top
        </v-layout>
      </v-card>
      <v-spacer />
    </v-footer>
  </v-container>
</template>

<script>
    import carousel from "../components/carousel";
    import Biography from "../components/biography";
    import Listen from "../components/listen";
    import Social from "../components/social";
    import Contact from "../components/contact";
    import SongDemo from '../components/song-demo'
    import EmailCollection from "~/components/email-collection";
    export default {
        name: "Home",
        components: {
          EmailCollection,
          SongDemo,
          Contact,
          Social,
          Listen,
          Biography,
          carousel
        }
    }
</script>

<style>
  p {
    word-spacing: 2px;
    line-height: 1.7;
  }
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
  }
  h3 {
    text-align: center;
    font-size: 20px;
    font-style: italic;
    font-weight: normal;
  }
  #bandLogo:hover {
    cursor: pointer;
  }
</style>
