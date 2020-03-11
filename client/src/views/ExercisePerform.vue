<template>
<div>

  <h1>{{ exercise.name }}</h1>
  <div v-html="exercise.description"></div>
</div>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
    components: {
        videoPlayer
    },
    computed: {
        exercise(){
            return this.$store.state.exercises.find(ex => ex.id == this.$route.params.id)
        }
    }
}
</script>

<style>
img {
    max-width: 50%;
  }
</style>