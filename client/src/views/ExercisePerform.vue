<template>
<div class="has-background-primary">
  <h1 class="column is-offset-one-third is-one-third title">{{ exercise.name }}</h1>
  <div class="column is-three-fifths is-offset-one-fifth" v-html="exercise.description"></div>
  <div class="column">
  <button class="button is-info is-centered" v-if="completed">Nice job!</button>
  <div v-else>
    <button class="button is-warning" @click="shareAchievement(); displayCompleted();">Workout Finished</button>
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
        var time = new Date().toLocaleString();
        try {
          await Achievements.add(this.exercise.name, time)
        } catch(error) {
          this.errror = error
        }
      }
    },
      data: () => ({
        name: "",
        //time: ""
      })
}

</script>

<style>
</style>