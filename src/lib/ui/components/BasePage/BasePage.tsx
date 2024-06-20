import React from 'react'

interface BasePageProps {
  children?: React.ReactNode;
}

const BasePage = (props: BasePageProps) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 w-full">
      {props.children}
    </main>
  );
}

export default BasePage;