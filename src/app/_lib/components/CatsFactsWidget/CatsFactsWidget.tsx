import React from 'react'
import fetchCardsData from './services/fetchCardsData'
import { useInfiniteQuery } from '@tanstack/react-query'
import CatsFactsContainer from './components/CatsFactsContainer/CatsFactsContainer'


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
    <CatsFactsContainer pages={data?.pages ?? []} />
    // <div>
    //   {status === 'pending' ? (
    //     <p>Loading...</p>
    //   ) : status === 'error' ? (
    //     <p>Error: {error.message}</p>
    //   ) : (
    //     <>

    //       <div>
    //         <button
    //           onClick={() => fetchNextPage()}
    //           disabled={!hasNextPage || isFetchingNextPage}
    //         >
    //           {isFetchingNextPage
    //             ? 'Loading more...'
    //             : hasNextPage
    //               ? 'Load More'
    //               : 'Nothing more to load'}
    //         </button>
    //       </div>
    //       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    //     </>
    //   )}
    // </div>
  );
}

export default CatsFactsWidget;