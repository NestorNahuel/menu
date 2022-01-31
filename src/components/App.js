import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import MenuContainer from '../containers/MenuContainer'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContainer />
    </QueryClientProvider>
  )
}

export default App
