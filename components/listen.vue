<template>
  <v-container>
    <h1 class="mb-2">Listen</h1>
    <v-row class="mt-4">
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
            :style="`padding: 8px; border-radius:${service.radius}`"
            elevation="6"
            :href="service.url"
            target="_blank"
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
          url: 'https://beta.music.apple.com/us/album/rebel-blood/1550867694?i=1550867698',
          radius: '12px'
        },
        {
          src: require('static/logos/spotify/Spotify_Logo_RGB_Green.png'),
          url: 'https://open.spotify.com/album/4pFnhU8oz6PIrk9jIa9zb1',
          radius: '40px'
        },
        {
          src: require('static/logos/youtube-music/youtube-music.png'),
          url: 'https://music.youtube.com/watch?v=uO1Hw5KvXC8&list=RDAMVMuO1Hw5KvXC8',
          radius: '12px'
        }
      ],
    }
  }
}
</script>
