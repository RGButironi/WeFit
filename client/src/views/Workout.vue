<template>
<div class="column has-background-info is-bold">
  <h1 class="title is-fullwidth">Upper Body</h1>
  <section class="list has-background-info">
    <article>
      <a class="delete is-medium is-pulled-left" v-on:click="todoDelete(todo)"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
    <article v-show="!isNinja">
      <a class="delete is-medium is-pulled-left" v-on:click="isNinja = !isNinja"></a>
      <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
  </section>

  <h1 class="title">Core</h1>
  <section class="list has-background-info">
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  </section>

  <h1 class="title">Lower Body</h1>
  <section class="list has-background-info">
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./bicep.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
    <article>
      <a class="delete is-medium is-pulled-left"></a>
      <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
    </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  <article>
    <a class="delete is-medium is-pulled-left"></a>
    <img src="./biceps1.png" width="96" height="96" alt="">
      <h3>Biceps</h3>
  </article>
  </section>
</div>
</template>

<script>
export default {
  props: ['todos'],

  methods: {
    todoCompleted(todo) {
        todo.completed = !todo.completed
    },

    todoDelete(todo) {
        this.todos.$delete(todo);
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;

    article {
      height: 150px;
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      /*box-shadow: 0 15px 30px rgba(0,0,0,.9),
                  0 10px 10px rgba(0,0,0,.2);*/

      h3 {
        margin: 0;
      }
      a {
        margin: 4px 0px 0px 4px;
      }
    }
  }
</style>