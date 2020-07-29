<template>
  <v-container>
    <div class="text-center mb-4">
      <slot name="activator">
        <v-btn color="primary" :disabled="showPlayer" @click="play">
          <v-icon class="mr-2">mdi-play</v-icon>
          Play Sample
        </v-btn>
      </slot>
    </div>
    <v-expand-transition>
      <v-layout v-if="showPlayer" justify-center class="fixedBottom" v-click-outside="stop">
        <v-card tile :width="$vuetify.breakpoint.xsOnly ? '100%' : '60%'" color="black">
          <v-layout class="mx-4 mt-4 mb-n3">
            {{ currentTime | time }}
            <v-slider
              :value="currentTime"
              :max="audio.duration"
              :step="stepSizeSec"
              height="3"
              hide-details
              class="mx-4 mt-3"
              style="z-index: 101;"
              @mousedown="pause"
              @change="(val) => { updateTime(val); play() }"
            />
            {{ audio.duration | time }}
          </v-layout>
          <v-list color="black pt-0">
            <v-list-item class="my-n2">
              <v-list-item-content>
                <v-list-item-title>{{ title }}</v-list-item-title>
                <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon class="mx-5">
                <v-btn v-if="!audioPaused" icon x-large @click="pause">
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn v-else icon x-large @click="play">
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-layout>
    </v-expand-transition>
  </v-container>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: "audio-player",
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      audio: null,
      showPlayer: false,
      audioPaused: false,
      currentTime: 0,
      stepSizeSec: 0.05,
      sliderInterval: ''
    }
  },
  mounted() {
    this.audio = new Audio(this.src)
  },
  methods: {
    play() {
      setTimeout(() => {
        this.showPlayer = true
      }, 50)
      this.audio.play()
      this.setSliderInterval()
      this.audioPaused = false
    },
    setSliderInterval() {
      this.sliderInterval = setInterval(() => {
        this.currentTime = this.audio.currentTime
        if (this.currentTime >= this.audio.duration) {
          this.stop()
          this.clearSliderInterval()
        }
      }, this.stepSizeSec * 1000)
    },
    clearSliderInterval() {
      clearInterval(this.sliderInterval)
    },
    pause() {
      this.audio.pause()
      this.clearSliderInterval()
      this.audioPaused = true
    },
    stop(event) {
      console.log('REACHED', event)
      this.showPlayer = false
      this.pause()
      this.audio.currentTime = 0
    },
    updateTime(seconds) {
      this.audio.currentTime = seconds
    }
  },
  filters: {
    time(seconds) {
      let _seconds = Number.parseFloat(seconds)
      let numMinutes = Math.floor(_seconds / 60)
      let secondsRemaining = Math.floor(_seconds % 60)
      return `${numMinutes}:${('0' + secondsRemaining).slice(-2)}`
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>
.fixedBottom {
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
  z-index:100;
}
</style>
