<template>
  <v-app>
    <RouterView></RouterView>
    <v-snackbar v-model="snackbar" location="top center" :color="queue[queue.length -1]?.color">
      {{ queue[queue.length -1]?.text }}

      <template v-slot:actions>
        <v-btn icon color="blue" variant="text" @click="messages.close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMessagesStore } from './utils/states';

const messages = useMessagesStore()
const { queue, snackbar } = storeToRefs(messages)


//
</script>