"use client";
import React from 'react'
import CatsFactsWidget from '../CatsFactsWidget';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


const CatsFactsPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsFactsWidget />
    </QueryClientProvider>
  );
}

export default CatsFactsPage;