<script setup>
import { useTabs } from '@/composables/useTabs.js'

const { tabs } = useTabs()
</script>

<template>
  <v-sheet elevation="6">
    <v-tabs
      bg-color="indigo"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tab
        v-for="value in tabs"
        :key="value.name"
        style="text-transform: none;"
      >
        <RouterLink :to="`/css/${value.path}`"
                    class="btn text-light">
          {{ value.name }}
        </RouterLink>
      </v-tab>
    </v-tabs>
  </v-sheet>
</template>

<style lang='scss' scope></style>
