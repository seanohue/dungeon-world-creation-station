import Vuex from 'vuex'
import axios from '../plugins/axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      moves: [], // eventually pull them in from API!
      classes: [],
      characters: [],
      hydrated: false
    },
    mutations: {
      addMove (state, move) {
        state.moves.push(move)
      },
      addClass (state, _class) {
        state.classes.push(_class)
      },
      addCharacter (state, char) {
        state.characters.push(char)
      },
      setHydrated (state, flag) {
        state.hydrated = flag
      }
    },
    actions: {
      hydrate (context) {
        if (this.state.hydrated) return Promise.resolve()
        return Promise.all([
          axios.get('/api/moves'),
          axios.get('/api/classes'),
          axios.get('/api/characters')
        ]).then(([
          { moves },
          { classes },
          { characters }
        ]) => {
          moves.forEach(move => context.commit('addMove', move))
          classes.forEach(_class => context.commit('addClass', _class))
          characters.forEach(char => context.commit('addCharacter', char))
          context.commit('setHydrated', true)
        }).catch(err => console.error(err))
      }
    }
  })
}

export default createStore
