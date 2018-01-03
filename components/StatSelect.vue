<template>
  <div class="select">
    <select v-model="stat">
      <option v-for="(st, i) in stats" :key="i" value="st">{{st}}</option>
    </select>
    <!-- TODO: Support "OTHER" option w/ text field. -->
  </div>
</template>

<script>
export default {
  name: 'statselect',
  data () {
    return {
      stat: '',
      stats: ['STR', 'DEX', 'INT', 'WIS', 'CON', 'CHA']
    }
  },
  watch: {
    stat (selection, old) {
      if (old === selection) return
      this.$emit('selected', selection)
    }
  }
}
</script>