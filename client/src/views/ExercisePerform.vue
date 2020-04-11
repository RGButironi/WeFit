<template>
<div class="has-background-primary">
<video-player  class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions">
</video-player>
  <h1>{{ exercise.name }}</h1>
  <button class="button is-info is-centered" v-if="completed">Nice job!</button>
  <div v-else>
    <button class="button is-warning" v-on:click="displayCompleted">Workout Finished</button>
  </div>
  <div v-html="exercise.description"></div>
</div>
</template>

<script>
// video player created by user (Surmon) on Github. -Ronald
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { mapState } from 'vuex';
export default {
    components: {
        videoPlayer
    },
    computed: {
        exercise(){
            return this.$store.state.exercises.find(ex => ex.id == this.$route.params.id)
        },
        ...mapState(['completedWorkout', 'exercises']),
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
        },
        completed(){
          return this.completedWorkout.includes(this.exercise.id);
        }
    },
    methods: {
      displayCompleted(){
        this.$store.dispatch('displayCompleted', this.exercise.id)
      }
    }
}
</script>

<style>
.video-player-box .video-js {
    margin: auto;
}
</style>