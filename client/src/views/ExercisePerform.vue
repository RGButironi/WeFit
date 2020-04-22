<template>
<div class="has-background-primary">
  <h1 class="column is-offset-one-third is-one-third title">{{ exercise.name }}</h1>
  <div class="column is-three-fifths is-offset-one-fifth" v-html="exercise.description"></div>
  <div class="column">
  <button class="button is-info is-centered" v-if="completed">Nice job!</button>
  <div v-else>
    <button class="button is-warning" v-on:click="displayCompleted">Workout Finished</button>
  </div>
</div>
</div>
</template>

<script>
import VueTable from 'vuejs-spreadsheet';
import { mapState } from 'vuex';
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
      }
    },
    components: {
      VueTable,
    }
}
</script>

<style>
</style>