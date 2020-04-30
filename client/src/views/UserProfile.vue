<template>
<div class="column is-fullheight has-background-bis">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
        <div class="tile is-parent has-text-centered">
        <article class="tile is-child notification is-info is-bold">
            <figure class="image is-square ">
                <img :src="picture">
            </figure>
          <p class="title">{{ name }}</p>
          <p class="subtitle">{{ location }}</p>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary is-bold">
          <p class="title">Fitness Goal for 2020:</p>
          <p class="subtitle">{{ annualgoal }}</p>
        </article>
        <article class="tile is-child notification is-warning is-bold">
          <p class="title">Favorite Exercise:</p>
          <p class="subtitle">{{ favorite }}</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger is-bold">
        <p class="title">Bio:</p>
        <p class="subtitle">{{ bio }}</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success is-bold">
      <div class="content">
        <p class="title is-3">Recently Completed Workouts</p>
        <p class="subtitle">{{ test }}</p>
        <div class="content">
          <ul>
              <button v-for="Achievement in Achievements" :key="Achievement">{{test}}</button>
          </ul>
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>

<script>
import UserProfile from "@/models/UserProfile";
//import Exercises from "@/models/Exercises";
export default {
    data: () => ({
          UserProfile,
          //Exercises,
        isOpenUserProfile: false,
        name: UserProfile.State.UserProfile.Name,
        favorite: UserProfile.State.UserProfile.Favorite,
        annualgoal: UserProfile.State.UserProfile.AnnualGoal,
        bio: UserProfile.State.UserProfile.Bio,
        picture: UserProfile.State.UserProfile.Picture,
        location: UserProfile.State.UserProfile.Location,
        //category: Exercises.State.Exercises.Category
        test: UserProfile.State.Achievements.Achievement

    }),
    
    created() {
        UserProfile.Init();
        //Exercises.Init();
    }
}
</script>

<style scoped>

.column {
    margin-right: 90px;
}

.profimage {
  justify-content: center;
}
</style>