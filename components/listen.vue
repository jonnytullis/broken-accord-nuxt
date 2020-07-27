<template>
  <v-container fluid>
    <h1>Coming Soon...</h1>
    <v-row>
      <v-col
        v-for="service in services"
        :key="service.name"
        cols="12"
        lg="4"
        md="4"
        sm="4"
      >
        <v-layout justify-center>
          <v-btn
            color="black"
            width="216"
            height="100%"
            :style="`padding: 8px; border-radius:${service.name.includes('Spotify') ? '40' : '12'}px`"
            elevation="6"
            :href="service.url"
          >
            <img
              :src="service.src"
              width="200"
              :alt="service.name"
            />
          </v-btn>
        </v-layout>
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
          name: 'Apple Music',
          radius: '10px'
        },
        {
          src: require('static/logos/spotify/Spotify_Logo_RGB_Green.png'),
          url: 'https://www.spotify.com/us/',
          name: 'Spotify',
          radius: '28px'
        },
        {
          src: require('static/logos/google_play/google-play-badge.png'),
          url: 'https://play.google.com/music/listen#/home',
          name: 'Google Play',
          radius: '10px'
        }
      ],
    }
  }
}
</script>
