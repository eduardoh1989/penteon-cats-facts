import React from 'react'

interface BasePageProps {
  children: React.ReactNode;
}

const BasePage = (props: BasePageProps) => {
  console.log('BasePageProps', props);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {props.children}
    </main>
  );
}

export default BasePage;