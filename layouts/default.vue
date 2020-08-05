<template>
  <v-app dark>
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      miniVariant: false,
      appTitle: 'BROKEN / ACCORD',
      pageTitle: 'Home'
    }
  }
}
</script>
