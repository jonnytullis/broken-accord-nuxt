<template>
  <v-container
    fluid
    class="px-0 pt-0 pb-8"
  >
    <v-app-bar
      fixed
      app
    >
      <v-img
        max-width="40"
        style="filter: invert(100%);"
        :src="require('static/logos/_broken_accord/logo-dark-vector.png')"
      />
      <v-spacer />
      <v-toolbar-title v-text="'BROKEN / ACCORD'" class="font-weight-bold heading" style="margin-left: -35px" />
      <v-spacer />
    </v-app-bar>
    <carousel id="carousel" />
    <v-row justify="center" no-gutters>
      <v-card class="mt-12" width="70%">
        <listen />
      </v-card>
    </v-row>
    <biography id="biography" class="mt-12 mx-8" />
  </v-container>
</template>

<script>
    import carousel from "../components/carousel";
    import Biography from "../components/biography";
    import Listen from "../components/listen";
    export default {
        name: "Home",
        components: {
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
</style>
