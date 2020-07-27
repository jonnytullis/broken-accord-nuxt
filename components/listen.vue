<template>
  <v-container fluid>
    <h1>Listen</h1>
    <h2>Coming Soon...</h2>
    <v-row>
      <v-col
        v-for="service in services"
        :key="service.name"
        cols="12"
        lg="4"
        md="4"
        sm="4"
      >
        <v-card color="transparent" :href="service.url">
          <v-layout justify-center>
            <v-img :src="service.src" max-width="200" />
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "listen",
  data() {
    return {
      services: [
        {
          src: require('static/logos/apple_music/Apple_Music_Badge_RGB.svg'),
          url: 'https://www.apple.com/apple-music/',
          name: 'Apple Music'
        },
        {
          src: require('static/logos/spotify/Spotify_Logo_RGB_Green.png'),
          url: 'https://www.spotify.com/us/',
          name: 'Spotify'
        },
        {
          src: require('static/logos/google_play/google-play-badge.png'),
          url: 'https://play.google.com/music/listen#/home',
          name: 'Google Play'
        }
      ],
    }
  }
}
</script>
