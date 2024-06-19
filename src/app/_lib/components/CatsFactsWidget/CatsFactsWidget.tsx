import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchUsers from '../../services/fetchUsers';


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
    queryFn: fetchUsers,
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
      <h1>
        Cats Facts Widget
      </h1>
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
                {group.results.map((person: any) => {
                  console.log('person', person)
                  return <p key={person.email}>{`${person.name.title} ${person.name.first}`}</p>
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