import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import LanguageContainer from '../../containers/LanguageContainer'

function App() {
  const queryClient = new QueryClient()
  return (
    <div style={{ fontFamily: 'Montserrat', fontSize: '0.9em' }}>
      <QueryClientProvider client={queryClient}>
        <LanguageContainer />
      </QueryClientProvider>
    </div>
  )
}

export default App
