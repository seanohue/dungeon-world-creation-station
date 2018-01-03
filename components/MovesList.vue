<template>
  <div class="section">
    <div class="container">
      <template v-for="move in moves">
        <nuxt-link :key="move" :to="{ name: 'move', params: { id: move.id, move: move.id } }">
          <button class="movelink button is-link">{{move.moveName}}</button>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statselect',
  props: ['moves'],
  data () {
    return {}
  },
  methods: {
    goToMove (id) {
      this.$emit('goto', id)
    }
  }
}
</script>

<<style scoped>
.button
{
  margin: 5px 5px
}
</style>
