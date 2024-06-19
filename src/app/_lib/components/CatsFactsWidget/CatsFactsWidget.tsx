import React from 'react'
import CatsFactCard from './components/CatFactCard'
import fetchCardsData from './services/fetchCardsData'
import { useInfiniteQuery } from '@tanstack/react-query'
import CatsFactCardData from './types/CatsFactCardData.type'


const CatsFactsWidget = () => {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchCardsData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  console.log('useInfiniteQuery', {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  })

  return (
    <div>
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {data.pages.map((group, i) => {
            return (
              <React.Fragment key={i}>
                {group.map((cardData: CatsFactCardData, j: number) => {
                  return <CatsFactCard key={`CatsFactCard-${i}-${j}`} {...cardData} />
                })}
              </React.Fragment>
            )

          })}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}
    </div>
  );
}

export default CatsFactsWidget;