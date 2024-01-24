import { ref } from 'vue'

export function useTabs () {
  const tabs = ref({
    flex: {
      name: 'flex',
      path: 'flex'
    }
  })

  return {
    tabs
  }
}
