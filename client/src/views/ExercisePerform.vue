<template>
<div class="has-background-primary">
  <h1 class="column is-offset-one-third is-one-third title">{{ exercise.name }}</h1>
  <div class="column is-three-fifths is-offset-one-fifth" v-html="exercise.description"></div>
  <div class="column">
  <button class="button is-info is-centered" v-if="completed">Nice job!</button>
  <div v-else>
    <button class="button is-warning" @click="shareAchievement">Workout Finished</button>
    <!-- dilapidated, for vuex: v-on:click="displayCompleted -->
  </div>
</div>
</div>
</template>

<script>

import { mapState } from 'vuex';
import Achievements from "@/models/Achievements";
export default {
    computed: {
        exercise(){
            return this.$store.state.exercises.find(ex => ex.id == this.$route.params.id)
        },
        ...mapState(['completedWorkout', 'exercises']),

        completed(){
          return this.completedWorkout.includes(this.exercise.id);
        }
    },
    methods: {
      displayCompleted(){
        this.$store.dispatch('displayCompleted', this.exercise.id)
      },
      async shareAchievement() {
        try {
          await Achievements.add(this.exercise.name)
        } catch(error) {
          this.errror = error
        }
      }
    },
      data: () => ({
        name: ""
      })
}

</script>

<style>
</style>