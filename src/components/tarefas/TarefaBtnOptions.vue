<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon dark> mdi-dots-horizontal </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon left>mdi-{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar />
  </div>
</template>

<script>
import ModalEditar from "../modal/ModalEditar.vue";
export default {
  components: { ModalEditar },
  data: () => ({
    items: [
      {
        icon: "pencil",
        title: "Editar Tarefa",
        click() {
          console.log("update");
        },
      },
      {
        icon: "trash-can",
        title: "Excluir Tarefa",
        click() {
          console.log("delete");
        },
      },
    ],
  }),
};
</script>

<style>
</style>