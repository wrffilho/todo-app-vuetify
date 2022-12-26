import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      { id: 1, titulo: "VueJS - Vuetify 1", concluido: false },
      { id: 2, titulo: "VueJS - Vuetify 2", concluido: false },
      { id: 3, titulo: "VueJS - Vuetify 3", concluido: false },
    ],
  },
  mutations: {
    addTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido:false
        })
      }
    },

    removeTask(state, id){
      console.log(state.tarefas);
      state.tarefas = state.tarefas.filter(tarefa =>  tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
