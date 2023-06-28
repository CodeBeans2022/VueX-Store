<template>
  <div class="home">
    <p>My name is {{ firstName }}</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      firstName: 'Jamie-Lee'
    }
  }
}
</script>
