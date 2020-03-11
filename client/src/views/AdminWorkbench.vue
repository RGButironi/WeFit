<template>
    <v-container>
    <br>
    <div>
        <div class="flex-table">
            <div>Exercise Routine</div>
            <div>Description</div>
            <div>Controls</div>
        </div>
    <div class="flex-table" v-for="exercise in exercises" :key="exercise.id">
    <div>{{ exercise.name }}</div>
    <div>{{ exercise.description | abbreviate }}</div>
    <div>
        <router-link :to="{ name: 'exercise-perform', params: {id: exercise.id}}" class="button is-primary">Display</router-link>
        <v-btn @click="deleteExercise" class="button is-danger">Delete</v-btn>
    </div>
    </div>
    </div>
    </v-container>
</template>

<script>
import {mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['exercises'])
    }
}

</script>

<style lang="scss" scoped>
    .flex-table {
        padding: 10px;
        border-bottom: 1px black;
        display: grid;
        grid-template-columns: repeat(auto-fill, 33%);
    }
    .actions {

    }

</style>