<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <v-toolbar color="indigo">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{ route?.meta.title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style lang='scss' scope></style>
