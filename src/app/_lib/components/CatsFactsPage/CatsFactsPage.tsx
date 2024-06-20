"use client";
import React from 'react'
import CatsFactsWidget from '../CatsFactsWidget'
import BasePage from '@/lib/ui/components/BasePage'
import AppFooter from '@/lib/ui/components/AppFooter/AppFooter'
import AppWrapper from '@/lib/core/components/AppWrapper/AppWrapper'


const CatsFactsPage = () => {
  return (
    <AppWrapper>
      <BasePage>
        <h1 className="text-4xl font-light text-gray-600 mb-12">Cats Facts Widget</h1>
        <CatsFactsWidget />
        <AppFooter />
      </BasePage>
    </AppWrapper>
  );
}

export default CatsFactsPage;