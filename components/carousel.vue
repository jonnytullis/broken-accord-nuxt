<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    hide-delimiter-background
    height="auto"
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
  }
}
</script>
<style scoped>
  img {
    filter: grayscale(100%);
  }
</style>
