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
  </v-container>
</template>

<script>
import AudioPlayer from '../components/audio-player'
export default {
  name: "song-demo",
  components: { AudioPlayer }
}
</script>

<style scoped>

</style>
