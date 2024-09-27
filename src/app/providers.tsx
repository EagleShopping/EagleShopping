// app/providers.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'

export function Providers({ children }: { children: React.ReactNode }) {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  )
}