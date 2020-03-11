<template>
    
    <div class="home">
      <h1 class="title">Choose your exercise!</h1>
    <div class="section exercise-container">
      <div v-for="exercise in exercises" :key="exercise.name">
        <div class="exercise-box">
          <img :src="exercise.thumbnail" />
            <div>
              <h3>{{ exercise.name }}</h3>
              <div v-html="exercise.description"></div>
            </div>
        </div>
        <button class="button is-primary">Get Started!</button>
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

