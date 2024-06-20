import React from 'react'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = (props: AppWrapperProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default AppWrapper;