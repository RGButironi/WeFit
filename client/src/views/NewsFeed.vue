<template>
<section class="section has-background-warning">
    <br>
  <article class="media column is-three-fifths is-offset-one-fifth">
  <div class="media-content">
    <div class="content">
      <ul>
        <tr v-for="NewsFeed in log" :key="NewsFeed.time">
          <p class="image is-64x64">
            <img :src="NewsFeed.picture">
          </p>
              <p>
              <strong>{{NewsFeed.name}}</strong> <small>completed our {{NewsFeed.category}} routine on</small> <small>{{NewsFeed.time}}</small>
            <br>
              </p>
            <br>
          </tr>
      </ul>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
  </div>
</article>
</section>
</template>

<script>
import UserProfile from "@/models/UserProfile";
import NewsFeeds from "@/models/Achievements";

export default {
    data: () => ({
          UserProfile,
          //NewsFeeds,
        isOpenUserProfile: false,
        log: UserProfile.State.NewsFeed,
        log3: UserProfile.State.Achievements.Achievement,
        name: UserProfile.State.UserProfile.Name,
        picture: UserProfile.State.UserProfile.Picture,

    }),
    created(){
      UserProfile.Init()
    }
}
</script>

<style>

</style>