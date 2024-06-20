import React from 'react'
import { API_CATS_FACTS_LIMIT } from '@/lib/config'
import CatsFactCardLoading from './CatsFactCardLoading'


const CatsFactsLoading = () => {

  const pages = Array(API_CATS_FACTS_LIMIT).fill(null)

  return (
    <div className="grid grid-cols-1 gap-4 w-full md:w-1/2 mt-4">
      {pages.map((_, i) => {
        return <CatsFactCardLoading key={`CatsFactCardLoading-${i}`} />
      })}
    </div>
  );
}

export default CatsFactsLoading;