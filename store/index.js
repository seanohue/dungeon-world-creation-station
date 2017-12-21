import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      moves: [] // eventually pull them in from API!
    },
    mutations: {
      addMove (state, move) {
        state.moves.push(move)
      }
    }
  })
}

export default createStore
