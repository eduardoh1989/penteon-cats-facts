import React from 'react'
import CatsFactCard from '../CatsFactCard'
import CatsFactCardData from '../../types/CatsFactCardData.type'
import CatsFactPage from '../../types/CatsFactPage.type'

interface CatsFactsContainerProps {
  pages: CatsFactPage[]
}

const CatsFactsContainer = (props: CatsFactsContainerProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
      {props.pages.map((page: CatsFactPage, i: number) => {
        const cards = page.list
        return (
          <React.Fragment key={i}>
            {cards.map((cardData: CatsFactCardData, j: number) => {
              return <CatsFactCard key={`CatsFactCard-${i}-${j}`} {...cardData} />
            })}
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default CatsFactsContainer;