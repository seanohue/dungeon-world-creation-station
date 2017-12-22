<template>
  <section class="container">
    <h1 class="title">
      WELCOME, TRAVELLER
    </h1>
  </section>
</template>

<script>

export default {
  created () {
    return this.$store.dispatch('hydrate')
  },
  head () {
    return {
      title: 'Dungeon World Character Creator'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
ul
{
  list-style-type: none;
}
</style>
