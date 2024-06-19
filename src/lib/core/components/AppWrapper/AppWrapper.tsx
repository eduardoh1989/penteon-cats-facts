import React from 'react'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'


const queryClient = new QueryClient()

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = (props: AppWrapperProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default AppWrapper;