<template>
  <v-carousel
    show-arrows-on-hover
    hide-delimiter-background
    continuous
    cycle
    :height="height"
  >
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"
    />
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      images: [
        // IMPORTANT: Image width must be 2 times larger than the height
        {
          src: require('static/images/albums/rebel-blood-full-width.png')
        },
        {
          src: require('static/logos/_broken_accord/logo-dark-gradient_full_width.png')
        },
        {
          src: require('static/images/band/band-04.jpg')
        },
        {
          src: require('static/images/band/band-02.jpg')
        }
      ],
    }
  },
  computed: {
    height: function () {
      const maxHeight = window.innerHeight - 200
      const height = window.innerWidth / 2
      return Math.min(height, maxHeight)
    }
  }
}
</script>
<style scoped>
  img {
    filter: grayscale(100%);
  }
</style>
