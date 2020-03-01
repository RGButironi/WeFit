<template>
  <div class="home">
    <HelloWorld msg="Welcome to WeFit!"/>
    <figure class="image is-32x32">
    <img alt="Vue logo" src="../assets/freewefitlogo.png">
    </figure>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
