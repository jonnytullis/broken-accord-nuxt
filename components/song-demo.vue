<template>
  <v-container>
    <v-row>
      <v-spacer />
      <div>
        <h1>Rebel Blood</h1>
        <h3>Check out our upcoming single!</h3>
        <audio-player
          src="audio/rebel-blood-sample.mp3"
          title="Rebel Blood (DEMO)"
          subtitle="Upcoming - FALL 2020"
        />
      </div>
      <v-spacer />
    </v-row>
    <v-row justify="center" class="mt-4">
      <h3>Get notified when<br v-if="$vuetify.breakpoint.xsOnly" /> "Rebel Blood" is released</h3>
      <email-collection class="mx-8" />
    </v-row>
  </v-container>
</template>

<script>
import AudioPlayer from '../components/audio-player'
import EmailCollection from '../components/email-collection.vue'
export default {
  name: "song-demo",
  components: { AudioPlayer, EmailCollection }
}
</script>

<style scoped>

</style>
