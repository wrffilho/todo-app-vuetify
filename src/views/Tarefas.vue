<template>
  <div>
    <v-col cols="12">
      <v-text-field label="Outlined" outlined clearable v-model="tarefa" @keyup.enter="handleAddTarefa"></v-text-field>
    </v-col>
    <v-list flat subheader>
      <!-- <v-list
      flat
      subheader
      three-line
    > -->
      <v-subheader>General</v-subheader>

      <v-list-item-group multiple active-class="">
        <div v-for="tarefa in $store.state.tarefas" :key="tarefa.id">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
      
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
import Tarefa from "../components/tarefas/tarefa.vue";

export default {
  components: {
    Tarefa,
  },
  data() {
    return {
      tarefa: null,
     
    };
  },
  methods:{
    handleAddTarefa(){      
        this.$store.commit('addTarefa', this.tarefa)
        this.tarefa = null
    }
  }
};
</script>
