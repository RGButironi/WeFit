<template>
<div class="column is-fullheight has-background-bis">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
        <div class="tile is-parent">
        <article class="tile is-child notification is-info is-bold">
            <figure class="image is-4by3">
                <!--<img :src="picture">-->
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
          <p class="title">Fitness Focus:</p>
          <p class="subtitle">{{ focus }}</p>
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
        <p class="subtitle">With even more content</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>

<script>
import UserProfile from "@/models/UserProfile";

export default {
    data: () => ({
        isOpenUserProfile: false,
        name: UserProfile.State.UserProfile.Name,
        bio: UserProfile.State.UserProfile.Bio,
        //picture: UserProfile.State.UserProfile.Picture,
        location: UserProfile.State.UserProfile.Location,
        focus: UserProfile.State.UserProfile.Focus,
        annualgoal: UserProfile.State.UserProfile.AnnualGoal
    }),
    
    created() {
        UserProfile.Init()
    }
}
</script>

<style scoped>

.column {
    margin-right: 90px;
}

</style>