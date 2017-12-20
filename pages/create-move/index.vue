<template>
  <section class="container">
    <h1 class="title">
      Make a Move
    </h1>
    <div class="field">
      <div class="control">
        <label class="label">Name</label>
        <input type="text" placeholder="Kung Fu Grip">
        <label class="label">Description</label>
        <textarea class="textarea" :placeholder="descriptionPlaceholder" />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  // Likely not needed? Subpages will be good for this one.
  data () {
    return {
      descriptionPlaceholder: 'Give your move some backstory or context. If there are special conditions around when this move can be used, they should be described here.'
    }
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
</style>
