<template>
  <div class="select">
    <select v-model="stat">
      <option value="STR">STR</option>
      <option value="DEX">DEX</option>
      <option value="CON">CON</option>
      <option value="INT">INT</option>
      <option value="WIS">WIS</option>
      <option value="CHA">CHA</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'statselect',
  data () {
    return {
      stat: ''
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