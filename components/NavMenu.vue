<template>
  <div :class="{ 'navbar-menu': true, 'is-active': active }">
    <div class="navbar-start">
      <nuxt-link class="is-pulled-left navbar-item" to="/">Home</nuxt-link>
    </div>
    <div class="navbar-end">
      <nuxt-link class="is-pulled-left navbar-item" to="/create-char">Create Character</nuxt-link>
      <nuxt-link class="is-pulled-left navbar-item" to="/view-char">View Characters</nuxt-link>
      <nuxt-link class="is-pulled-left navbar-item" to="/create-class">Create Class</nuxt-link>
      <nuxt-link class="is-pulled-left navbar-item" to="/view-class">View Classes</nuxt-link>
      <nuxt-link class="is-pulled-left navbar-item" to="/create-move">Create Move</nuxt-link>
      <nuxt-link class="is-pulled-left navbar-item" to="/view-move">View Moves</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['active']
}
</script>