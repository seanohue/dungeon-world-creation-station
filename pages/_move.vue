<template>
  <section class="container">
    <h1 class="title">
      {{ move.moveName }}
    </h1>
    <h2 class="info">
      {{ move.moveDesc }}
    </h2>
    <p :v-if="hasRoll" class="info">
      Roll: {{ move.roll }} <br />
      On a success: {{ move.success }} <br />
      When you partially succeed: {{ move.partial }} <br />
      On failure: {{ move.failure }} <br />
    </p>
    <nuxt-link class="button" to="/view-move">
      Moves
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'move',
  async asyncData ({ params, error }) {
    return axios.get('/api/moves/' + params.id)
      .then((res) => {
        console.log('Got: ', res.data)
        const { result = {} } = res.data
        return { move: result }
      })
      .catch((e) => {
        console.error(e)
        error({ statusCode: 404, message: 'Move not found' })
      })
  },
  head () {
    return {
      title: `Move: ${this.move.moveName}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
