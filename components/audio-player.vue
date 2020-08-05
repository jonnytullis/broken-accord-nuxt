<template>
  <v-container>
    <div class="text-center mb-4">
      <slot name="activator">
        <v-row :justify="justify">
          <div style="width: fit-content; height: fit-content;" @click="play">
            <v-btn
              :disabled="showPlayer"
              color="primary"
              icon
              x-large
              class="my-1"
            >
              <v-icon size="70">mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
        </v-row>
        <span
          :style="`color:${$vuetify.theme.themes.dark.primary}`"
          class="overline"
        >
          Play Now
        </span>
      </slot>
    </div>
    <v-expand-transition>
      <v-layout v-if="showPlayer" justify-center class="fixedBottom">
        <v-card tile :width="$vuetify.breakpoint.xsOnly ? '100%' : '60%'" color="black">
          <v-layout class="mx-4 mt-4 mb-n3">
            {{ sliderTime | time }}
            <v-slider
              v-model="sliderTime"
              :max="audio.duration"
              step="0"
              height="3"
              hide-details
              class="mx-4 mt-3"
              style="z-index: 11"
              @start="freezeSliderUpdate = true"
              @end="freezeSliderUpdate = false"
              @change="updateTime"
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
                <v-btn v-if="!isPaused" icon x-large @click="pause">
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn v-else icon x-large @click="play">
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-list-item-icon>
              <v-list-item-icon>
                <v-icon class="mt-4" @click="stop">
                  mdi-close
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-layout>
    </v-expand-transition>
  </v-container>
</template>

<script>

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
    },
    justify: {
      type: String,
      default: 'center'
    }
  },
  data: () => {
    return {
      audio: null,
      showPlayer: false,
      isPaused: false,
      sliderTime: 0,
      stepSizeSec: 0.05,
      sliderUpdateInterval: '',
      freezeSliderUpdate: false
    }
  },
  mounted() {
    this.audio = new Audio(this.src)
    this.audio.addEventListener('ended', this.handleEnded)
  },
  methods: {
    handleEnded() {
      if (!this.freezeSliderUpdate) {
        this.stop()
        this.clearSliderInterval()
      } else {
        this.isPaused = true
      }
    },
    play() {
      setTimeout(() => {
        this.showPlayer = true
      }, 50)
      this.audio.play()
      this.setSliderInterval()
      this.isPaused = false
    },
    setSliderInterval() {
      this.sliderUpdateInterval = setInterval(() => {
        if (!this.freezeSliderUpdate) {
          this.sliderTime = this.audio.currentTime
        }
      }, this.stepSizeSec * 1000)
    },
    clearSliderInterval() {
      clearInterval(this.sliderUpdateInterval)
    },
    pause() {
      this.audio.pause()
      this.clearSliderInterval()
      this.isPaused = true
    },
    stop() {
      this.showPlayer = false
      this.pause()
      this.audio.currentTime = 0
      this.sliderTime = 0
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
  }
}
</script>

<style scoped>
.fixedBottom {
  position:fixed;
  bottom:0;
  left:0;
  width: 100%;
  z-index: 10;
}
</style>
