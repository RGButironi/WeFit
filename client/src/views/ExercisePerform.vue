<template>
<div>
  <h1>Hi, let's exercise!</h1>
  <h3>{{ this.$route.params.id }}</h3>
  {{ exercise.name }}
</div>
</template>

<script>
export default {
    computed: {
        exercise(){
            return this.$store.state.exercises.find(ex => ex.name == this.$route.params.id)
        }
    }
}
</script>

<style>
img {
    max-width: 50%;
  }
</style>