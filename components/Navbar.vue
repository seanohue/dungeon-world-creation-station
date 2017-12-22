<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <button :class="{ 'is-pulled-left': true, 'is-hidden-desktop': true, button: true, 'navbar-burger': true, 'is-active': isActive }" @click="toggleBurger" id="burger">
          <NavMenu end="false" v-if="isActive" />
          <EmptyNavMenu v-if="!isActive" />
        </button>
      </div>
      <div class="navbar-menu">
        <NavMenu end="true" />
      </div>
    </nav>
  </div>
</template>

<script>
import EmptyNavMenu from './EmptyNavMenu'
import NavMenu from './NavMenu'

export default {
  components: { EmptyNavMenu, NavMenu },
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
