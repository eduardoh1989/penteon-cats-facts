"use client";
import React from 'react'
import CatsFactsWidget from '../CatsFactsWidget'
import AppWrapper from '@/lib/core/components/AppWrapper/AppWrapper'


const CatsFactsPage = () => {
  return (
    <AppWrapper>
      <CatsFactsWidget />
    </AppWrapper>
  );
}

export default CatsFactsPage;