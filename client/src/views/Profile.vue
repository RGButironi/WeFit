<template>
<div class="column is-fullheight has-background-bis">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
        <div class="tile is-parent">
        <article class="tile is-child notification is-info is-bold">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          <p class="title">Name</p>
          <p class="subtitle">Location</p>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary is-bold">
          <p class="title">Fitness Goal for 2020</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning is-bold">
          <p class="title">Fitness Focus:</p>
          <p class="subtitle">Strength, endurance, weight loss, injury recovery</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger is-bold">
        <p class="title">Longest time away from WeFit:</p>
        <p class="subtitle">ghdjccf</p>
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
export default {

}
</script>

<style scoped>

.column {
    margin-right: 90px;
}

</style>