import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    username: String,
    todos: [
      {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'author': 'admin',
          'completed': false,
          'editing': false,
      },
      {
          'id': 2,
          'title': 'Take over world',
          'completed': false,
          'author': 'admin',
          'editing': false,
      },
      {
          'id': 3,
          'title': 'Take over minecraft',
          'completed': false,
          'author': 'admin',
          'editing': false,
      }
  ],
  archiviaTodo: [

  ],
  searchTemp: [
    
  ]
  },
  getters: {
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticate = status
    }
  },
  actions: {
  },
  modules: {
  }
})
