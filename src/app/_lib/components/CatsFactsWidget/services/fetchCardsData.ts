import fetchUsers from "./fetchUsers"
import fetchCatsFacts from "./fetchCatsFacts"
import { API_CATS_FACTS_LIMIT } from "@/lib/config"
import CatsFactPage from "../types/CatsFactPage.type"
import CatsFactCardData from "../types/CatsFactCardData.type"
import QueryFunctionArgs from "@/lib/core/types/QueryFunctionArgs.type"


export default async (params:QueryFunctionArgs): Promise<CatsFactPage> => {
  try {
    const [catsFactsData, usersData] = await Promise.all([
      fetchCatsFacts(params),
      fetchUsers(params)
    ])

    // Simulate slow network for testing purposes
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    const catsFactsList = catsFactsData.data
    const usersList = usersData.results

    const nextPage = getNextPage(params.pageParam, usersData, catsFactsData)

    return {
      list: buildCardsData(catsFactsList, usersList),
      page: params.pageParam,
      nextCursor: nextPage,
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

const getNextPage = (page: number, usersData: any, catsFactsData: any) => {
  const usersHasMore = (
    usersData.info.results === API_CATS_FACTS_LIMIT
  )
  const catsFactsHasMore = (
    (catsFactsData.current_page < catsFactsData.last_page) && 
    (!!catsFactsData.next_page_url)
  )
  if (catsFactsHasMore && usersHasMore) {
    return page + 1
  } else return null
}

const buildCardsData = (catsFactsList: any[], usersList: any[]): CatsFactCardData[] => {
  const howMany = usersList.length > catsFactsList.length ? usersList.length : catsFactsList.length
  return catsFactsList.slice(0, howMany).map((catsFact, index) => {
    return {
      user: {
        id: usersList[index].login.uuid,
        photo: usersList[index].picture.thumbnail,
        name: `${usersList[index].name.title} ${usersList[index].name.first}`,
      },
      catsFact: catsFact.fact,
    }
  })
}