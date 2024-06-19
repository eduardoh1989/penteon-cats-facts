"use client";
import React from 'react'
import CatsFactsWidget from '../CatsFactsWidget'
import BasePage from '@/lib/ui/components/BasePage'
import AppWrapper from '@/lib/core/components/AppWrapper/AppWrapper'
import AppFooter from '@/lib/ui/components/AppFooter/AppFooter';


const CatsFactsPage = () => {
  return (
    <AppWrapper>
      <BasePage>
        <h1>
          Cats Facts Widget
        </h1>
        <CatsFactsWidget />
        <AppFooter />
      </BasePage>
    </AppWrapper>
  );
}

export default CatsFactsPage;