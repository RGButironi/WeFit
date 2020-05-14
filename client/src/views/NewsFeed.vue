<template>
<section class="section has-background-warning">
    <br>
  <article class="media column is-three-fifths is-offset-one-fifth">
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a User">
            <b-autocomplete
                :data="data"
                placeholder="Mike Parish"
                field="title"
                :loading="isFetching"
                v-on:@typing="getAsyncData"
                @select="option => selected = option">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                        </div>
                        <div class="media-content">
    
                            <br>
                            
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
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
import myFetch from '../models/myFetch';


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
    },
    methods: {
        // You have to install and import _.debounce to use it,
        // it's not mandatory though.
        getAsyncData() {
            if (!name.length) {
                this.data = []
                return
            }
            this.isFetching = true
            myFetch.get({name})
                .then(({ data }) => {
                    this.data = []
                    data.results.forEach((item) => this.data.push(item))
                })
                .catch((error) => {
                    this.data = []
                    throw error
                })
                .finally(() => {
                    this.isFetching = false
                })
        }
    }
}
</script>

<style>

</style>