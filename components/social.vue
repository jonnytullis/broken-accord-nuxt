<template>
  <v-container fluid>
    <h1 class="mb-2">Follow</h1>
    <v-layout justify-center>
      <h3>We love our fans! &nbsp;We want to hear from you</h3>&nbsp; &#128513;
    </v-layout>
    <h3>Like, Follow, and Comment</h3>
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
            color="transparent"
            height="80"
            :width="service.width"
            :height="service.height"
            :style="`padding: 8px; border-radius:${service.radius}`"
            elevation="6"
            :href="service.url"
          >
            <img
              :src="service.src"
              :height="service.height"
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
    name: "social",
    data() {
      return {
        services: [
          {
            src: require('static/logos/facebook/f_logo_RGB-Blue_250.png'),
            url: 'https://www.facebook.com/brokenaccord/?ref=aymt_homepage_panel&eid=ARBMBJkdmMPemC92kHRTYaJiGindIHqvQ-HEaaJhxbwy3ZVSJY-bm9Oml7UkyJkG_CzxZPBmm-Gluxr8',
            radius: '50%',
            width: '80',
            height: '80'
          },
          {
            src: require('static/logos/youtube/yt_icon_rgb.png'),
            url: 'https://www.youtube.com/channel/UCYx4KXiUDp7zutd1nruIm2w?view_as=subscriber',
            radius: '18px',
            width: '99',
            height: '70'
          },
          {
            src: require('static/logos/instagram/IG_Glyph_Fill.png'),
            url: 'https://www.instagram.com/brokenaccord.band/',
            radius: '22px',
            width: '80',
            height: '80'
          }
        ],
      }
    }
  }
</script>
