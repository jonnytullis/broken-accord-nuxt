<template>
  <v-container>
    <h1 class="mb-2">Follow</h1>
    <h3>Keep up with the latest news and upcoming shows</h3>
    <v-row align="center" style="height: 100%;">
      <v-col
        v-for="service in services"
        :key="service.name"
        style="text-align: center;"
        class="my-5"
        cols="6"
        sm="3"
        md="3"
        lg="3"
        xl="3"
      >
        <v-btn
          color="transparent"
          depressed
          :width="Number(service.width) + 8"
          :height="Number(service.height) + 8"
          :style="`padding: 8px; border-radius:${service.radius}`"
          :href="service.url"
          target="_blank"
        >
          <img
            :src="service.src"
            :height="service.height"
            :alt="service.name"
          />
        </v-btn>
      </v-col>
    </v-row>
    <h3 class="font-weight-bold mb-2">Follow, Like, Comment</h3>
    <h3>We want to hear from you!</h3>
  </v-container>
</template>

<script>
  export default {
    name: "social",
    data() {
      return {
        services: [
          {
            src: require('static/logos/tiktok/tiktok.png'),
            url: 'https://www.tiktok.com/@brokenaccord',
            radius: '10px',
            width: '80',
            height: '80'
          },
          {
            src: require('static/logos/instagram/IG_Glyph_Fill.png'),
            url: 'https://www.instagram.com/brokenaccord.band/',
            radius: '24px',
            width: '80',
            height: '80'
          },
          {
            src: require('static/logos/youtube/yt_icon_rgb.png'),
            url: 'https://www.youtube.com/channel/UCYx4KXiUDp7zutd1nruIm2w?view_as=subscriber',
            radius: '18px',
            width: '99',
            height: '65'
          },
          {
            src: require('static/logos/facebook/f_logo_RGB-Blue_250.png'),
            url: 'https://www.facebook.com/brokenaccord/?ref=aymt_homepage_panel&eid=ARBMBJkdmMPemC92kHRTYaJiGindIHqvQ-HEaaJhxbwy3ZVSJY-bm9Oml7UkyJkG_CzxZPBmm-Gluxr8',
            radius: '50%',
            width: '80',
            height: '80'
          },
        ],
      }
    }
  }
</script>
