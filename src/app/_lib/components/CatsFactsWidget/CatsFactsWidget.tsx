import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchCardsData from './services/fetchCardsData'


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
            console.log('group', group)

            return (
              <React.Fragment key={i}>
                {group.map((cardData: any) => {
                  return <p key={cardData.user.email}>{`${cardData.user.name}`}</p>
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