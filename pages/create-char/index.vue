<template>
  <section class="container">
    <h1 class="title">
      Make a Character
    </h1>
  </section>
</template>

<script>

export default {
  // Likely not needed? Subpages will be good for this one.
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    return { characters: [] }
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
