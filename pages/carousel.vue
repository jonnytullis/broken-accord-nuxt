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
  data() {
    return {
      images: [
        // IMPORTANT: Image width must be 2.5 times larger than the height
        {
          src: require('static/images/band/band-04.jpg'),
        },
        {
          src: require('static/images/band/band-02.jpg'),
        },
        {
          src: require('static/images/gigs/gig-warehouse-margins.png')
        }
      ],
    }
  }
}
</script>
