"use client";
import React from 'react'
import CatsFactsWidget from '../CatsFactsWidget'
import BasePage from '@/lib/ui/components/BasePage'
import AppWrapper from '@/lib/core/components/AppWrapper/AppWrapper'


const CatsFactsPage = () => {
  return (
    <AppWrapper>
      <BasePage>
        <CatsFactsWidget />
      </BasePage>
    </AppWrapper>
  );
}

export default CatsFactsPage;