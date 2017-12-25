<template>
  <section class="container">
    <h1 class="title">
      View Moves
    </h1>
    <MovesList :moves="moves"/>
  </section>
</template>

<script>
import MovesList from '~/components/MovesList'
import axios from '~/plugins/axios'

export default {
  components: { MovesList },
  asyncData ({ error }) {
    return axios.get('/api/moves')
      .then(({ data = {} }) => {
        const moveTuples = data.moves || []
        const moves = moveTuples.map((tuple = []) => tuple[0] || {})
        return { moves }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Failed to fetch moves' })
      })
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
