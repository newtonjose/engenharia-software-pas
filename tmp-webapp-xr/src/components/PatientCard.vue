<script setup>
defineProps({
  patient: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-card :title="patient.name" :subtitle="patient.cpf" :text="patient.infos">
    <v-card-actions>
      <v-btn>Infos</v-btn>
    </v-card-actions>
  </v-card>
</template>
