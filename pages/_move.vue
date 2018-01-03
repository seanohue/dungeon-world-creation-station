<template>
  <section class="container">
    <h1 class="title">
      {{ move.moveName }}
    </h1>
    <h2 class="info">
      {{ move.moveDesc }}
    </h2>
    <div v-if="move.hasRoll" class="info">
      <!-- TODO: Make this template less trash. Use Bulma good. -->
      <h3> <strong>Roll: {{ move.roll }}</strong>
        <span v-if="move.rollModifier"> + <strong>{{ move.rollModifier }}</strong> </span>
      </h3>
      <div class="columns">
        <div class="column" v-if="move.success">
          <strong>On a success:</strong>
          <p>{{ move.success }}</p>
        </div>
        <div class="column" v-if="move.partial">
          <strong>When you partially succeed:</strong>
          <p>{{ move.partial }}</p>
        </div>
        <div class="column" v-if="move.failure">
          <strong>On failure:</strong>
          <p>{{ move.failure }}</p>
        </div>
      </div>
    </div>
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
