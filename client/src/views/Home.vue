<template>
    <div class="home">
    <div class="section exercise-container has-background-info is-bold">
      <h1 class="title has-text-centered">Choose your exercise!</h1>
      <div v-for="exercise in exercises" :key="exercise.name">
        <router-link class="column" v-bind:to="{ name: 'exercise-perform', params: { id: exercise.id }}">
        <div class="exercise-box">
          <img :src="exercise.thumbnail" />
            <div>
              <h3 class="has-text-warning has-text-weight-bold">{{ exercise.name }}</h3>
              <div class="has-text-white has-text-weight-semibold" v-html="exercise.description"></div>
            <div class="has-text-black">Completions: {{exercise.views}}</div>
            </div>
        </div>
        </router-link>
        <button class="button" @click="increment">Increment</button>
        {{ exercise.views }}
        <div class="column is-offset-one-fifth-desktop is-three-fifths-desktop has-text-weight-semibold">Difficulty<progress class="progress is-small is-success" value="45" max="100">90%</progress></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "home",
  components: {},
    data() {
      return {
        exercises: this.$store.state.exercises
      }
    },
        computed: {
      ...mapState(['views'])
    },
    methods: {
        increment(exercise) {
        this.$store.dispatch('increment', exercise.views)
        }
    }
};
</script>

<style lang="scss" scoped>
  .exercise-container {
    .exercise-box {
      border:1px solid black;
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      text-align: left;
      display: flex;
      justify-content:  flex-start;

      img {
        max-height: 96px;
        padding: 10px;
      }
    }
  }
</style>