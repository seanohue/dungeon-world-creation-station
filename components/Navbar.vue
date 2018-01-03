<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <button :class="{ 'navbar-burger': true, 'is-active': isActive }" @click="toggleBurger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <NavMenu :active="isActive"/>
    </nav>
  </div>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  components: { NavMenu },
  data () {
    return { isActive: false }
  },

  methods: {
    toggleBurger () {
      if (this.isActive) {
        return this.closeBurger()
      }
      return this.openBurger()
    },
    openBurger () {
      this.isActive = true
    },
    closeBurger () {
      this.isActive = false
    }
  }
}
</script>
