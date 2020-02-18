<template>
  <v-container
    fluid
    class="pa-0"
  >
    <carousel id="carousel" />
    <v-row>
      <v-spacer/>
      <v-col cols="9">
        <biography id="biography" class="mt-12 font" />
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
    import carousel from "./carousel";
    import Biography from "./biography";
    export default {
        name: "Home",
        components: {
          Biography,
          carousel
        }
    }
</script>

<style scoped>
</style>
