<template>
  <section class="container">
    <h1 class="title">
      Make a Move
    </h1>
    <div class="field">
      <div class="control">
        <label class="label">Name</label>
        <input v-model="moveName" type="text" placeholder="Kung Fu Grip">
        <label class="label">Description</label>
        <textarea v-model="moveDesc" class="textarea" :placeholder="descriptionPlaceholder" />
        <label class="checkbox">
          <input v-model="hasRoll" type="checkbox">
          Do you need to roll dice to use this move?
        </label>
        <div v-if="hasRoll">
          <label class="label">Roll Modifier (if applicable)</label>
          <StatSelect v-on:selected="setModifier"></StatSelect>
          <label  class="label">Roll:</label>
          <input v-model="roll" type="text" placeholder="2d6">
          <label class="label">On Success:</label>
          <textarea v-model="success" class="textarea" :placeholder="rollSuccessPlaceholder" />
          <label class="label">On Partial Success:</label>
          <textarea v-model="partial" class="textarea" :placeholder="rollPartialPlaceholder" />
          <label class="label">On Failure:</label>
          <textarea v-model="failure" class="textarea" :placeholder="rollFailurePlaceholder" />
        </div>
        <div class="control">
          <button class="button is-link" v-on:click="submit">Submit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StatSelect from '~/components/StatSelect.vue'

export default {
  components: { StatSelect },
  data () {
    return {
      descriptionPlaceholder: 'Give your move some backstory or context. If there are special conditions around when this move can be used, they should be described here.',
      rollSuccessPlaceholder: 'Good things happen.',
      rollPartialPlaceholder: 'Good things happen... but at a cost.',
      rollFailurePlaceholder: 'Bad things happen, and you mark XP.',

      moveName: '', // make required.
      moveDesc: '',

      hasRoll: true,
      rollModifier: '',

      roll: '2d6',
      success: '',
      partial: '',
      failure: ''
    }
  },
  methods: {
    setModifier (mod) {
      this.rollModifier = mod
    },

    submit () {
      this.$store.commit('addMove', this.objectify())
      this.$emit('save', 'moves')
    },

    objectify () {
      // Use objectmodel here or in store:
      const {
        moveName, moveDesc, hasRoll, rollModifier, roll, success, partial, failure
      } = this

      return {
        moveName, moveDesc, hasRoll, rollModifier, roll, success, partial, failure
      }
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
button
{
  padding: 5
}
</style>
