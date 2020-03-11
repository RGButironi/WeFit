<template>
<div class="has-background-primary">
<video-player  class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions">
</video-player>
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
        },
        playerOptions(){
            return {

          language: 'en',
          playbackRates: [0.7, 1.0],
          sources: [{
            type: "video/mp4",
            src: this.exercise.vidlink
          }],
          poster: this.exercise.thumbnail,
            }
        }
    }
}
</script>

<style>
.video-player-box .video-js {
    margin: auto;
}
</style>