<template>
  <v-app dark>
    <v-content>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />
      </v-container>
    </v-content>
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
