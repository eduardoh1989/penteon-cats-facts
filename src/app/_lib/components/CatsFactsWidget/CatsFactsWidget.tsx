import React from 'react'
import fetchCardsData from './services/fetchCardsData'
import { useInfiniteQuery } from '@tanstack/react-query'
import CatsFactsLoading from './components/CatsFactsLoading'
import ErrorHandler from './components/ErrorHandler/ErrorHandler'
import CatsFactsContainer from './components/CatsFactsContainer/CatsFactsContainer'


const CatsFactsWidget = () => {

  const {
    data,
    error,
    status,
    isLoading,
    fetchStatus,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['catsFacts'],
    queryFn: fetchCardsData,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    retry: 3,
  })

  const bottomRef = React.useRef<HTMLDivElement>(null)
  const observer = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect()
    if (status === 'error') return;

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) fetchNextPage()
    })

    if (bottomRef.current) observer.current.observe(bottomRef.current)
  }, [isLoading, hasNextPage, status, fetchNextPage])

  const showFetchMoreButton = React.useMemo(() => {
    if (typeof window === 'undefined' || status === 'error') return false;
    const scrollPosition = window.innerHeight + window.scrollY
    const threshold = document.body.offsetHeight - 1
    const isAtTheBottom = scrollPosition >= threshold
    return isAtTheBottom && hasNextPage && !isFetchingNextPage
  }, [isFetchingNextPage, hasNextPage, status])

  return (
    <>
      <CatsFactsContainer pages={data?.pages ?? []} />
      {(isLoading || isFetchingNextPage) && <CatsFactsLoading />}
      <ErrorHandler status={status} error={error?.message ?? ''} fetchStatus={fetchStatus} refetch={refetch} />
      <div ref={bottomRef} />
      {showFetchMoreButton && (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </>
  )
};

export default CatsFactsWidget;
