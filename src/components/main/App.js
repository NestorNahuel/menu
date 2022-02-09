import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import LanguageContainer from '../../containers/LanguageContainer'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContainer />
    </QueryClientProvider>
  )
}

export default App
