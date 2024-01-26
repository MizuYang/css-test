import { ref } from 'vue'

export function useTabs () {
  const tabs = ref({
    flex: {
      tabId: 0,
      name: 'flex',
      path: 'flex'
    },
    pseudoClasses: {
      tabId: 1,
      name: '偽類',
      path: 'pseudoClasses'
    }
  })

  return {
    tabs
  }
}
