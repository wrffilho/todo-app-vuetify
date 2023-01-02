<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>

        <v-text-field
          v-model="message4"
          label="Informe o título"
          outlined
          class="px-6"
          
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style>
</style>