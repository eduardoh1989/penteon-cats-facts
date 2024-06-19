import React from 'react'
import CatsFactCard from '../CatsFactCard'
import CatsFactCardData from '../../types/CatsFactCardData.type'


interface CatsFactsContainerProps {
  pages: CatsFactCardData[][]
}

const CatsFactsContainer = (props: CatsFactsContainerProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
      {props.pages.map((group: CatsFactCardData[], i: number) => {
        return (
          <React.Fragment key={i}>
            {group.map((cardData: CatsFactCardData, j: number) => {
              return <CatsFactCard key={`CatsFactCard-${i}-${j}`} {...cardData} />
            })}
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default CatsFactsContainer;