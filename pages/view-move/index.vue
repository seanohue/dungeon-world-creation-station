<template>
  <section class="container">
    <h1 class="title">
      View Moves
    </h1>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  // Likely needed. Will be similar to the seed app in fact.
  // List characters by name and click them to view.
  async asyncData () {
    let { moves } = await axios.get('/api/moves')
    return { moves }
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
