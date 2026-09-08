import type { ConferenceData } from '~/types/conference-data'

export const useConferenceData = () => {
  const KEY = 'conference-data'

  // NOTE: We use the same key for each call to cache the response!. The cached
  // value can then be accessed via `useNuxtData` composable (if needed).
  return useAsyncData<ConferenceData>(KEY, () =>
    $fetch('/data/conference-data.json'),
  )
}
