<template>
  <div class="section">
    <div class="container">
      <template v-for="move in moves">
        <nuxt-link :to="{ name: 'move', params: { id: move.id, move: move.id } }">
          <button class="button is-link">{{move.moveName}}</button>
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
    console.log('MoveList:::', this)
    return {}
  },
  methods: {
    goToMove (id) {
      this.$emit('goto', id)
    }
  }
}
</script>