// app/providers.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {

  const client = new QueryClient()

  return (
    <Provider store={store}>
    <QueryClientProvider client={client}>
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
    </Provider>
  )
}