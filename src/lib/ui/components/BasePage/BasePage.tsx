import React from 'react'

interface BasePageProps {
  children?: React.ReactNode;
}

const BasePage = (props: BasePageProps) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between w-full p-4 md:p-24">
      {props.children}
    </main>
  );
}

export default BasePage;