<template>
  <div v-if="isVisible" class="splash-screen">
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @loadeddata="onVideoLoaded"
      class="background-video"
    >
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="overlay-text">
      <h1><vue-typewriter-effect :strings="['Hi, I am Andrea.', 'Andrea Donati.']" /></h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueTypewriterEffect from 'vue-typewriter-effect'
const videoSource = '/src/assets/background.mp4' // Ensure the correct path

const isVisible = ref(true)

// Event handler for video loaded event
const onVideoLoaded = () => {
  console.log('Video loaded successfully!')
}

// Hide splash screen after video loads (or after some time)
setTimeout(() => {
  isVisible.value = false
}, 10000) // Adjust timing as needed
</script>

<style scoped>
.splash-screen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

.overlay-text h1 {
  font-size: 3rem;
}

.overlay-text p {
  font-size: 1.5rem;
}
</style>
