import { ref } from 'vue'

// data
const curTabs = ref(0)
export function useCssStore () {
  function updateCurTabs (newValue) {
    curTabs.value = newValue
  }

  return {
    curTabs,
    updateCurTabs
  }
}
