<script setup>
import { useTabs } from '@/composables/useTabs.js'

// composables
import { useCssStore } from '@/stores/useCssStore.js'
const { curTabs } = useCssStore()
const { tabs } = useTabs()

</script>

<template>
  <v-sheet elevation="6">
    <v-tabs
      bg-color="indigo"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      v-model="curTabs"
    >
      <v-tab
        v-for="value in tabs"
        :key="value.tabId"
        :id="`tabid-${value.tabId}`"
        :tab-value="value.tabId"
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
