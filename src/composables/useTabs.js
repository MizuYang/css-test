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
    },
    pseudoElements: {
      tabId: 2,
      name: '偽元素',
      path: 'pseudoElements'
    }
  })

  return {
    tabs
  }
}
