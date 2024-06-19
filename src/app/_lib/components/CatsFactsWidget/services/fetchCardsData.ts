import fetchUsers from "./fetchUsers"
import fetchCatsFacts from "./fetchCatsFacts"
import { API_CATS_FACTS_LIMIT } from "@/lib/config"
import QueryFunctionArgs from "@/lib/core/types/QueryFunctionArgs.type"

export default async (params:QueryFunctionArgs) => {
  try {
    const catsFactsData = await fetchCatsFacts(params)
    const usersData = await fetchUsers(params)
  
    const catsFactsList = catsFactsData.data
    const usersList = usersData.results

    return buildCardsData(catsFactsList, usersList)
  } catch (error: any) {
    throw new Error(error)
  }
}

const buildCardsData = (catsFactsList: any, usersList: any) => {
  const collectionsHasDesiredLength = catsFactsList.length === usersList.length && catsFactsList.length === API_CATS_FACTS_LIMIT
  if (!collectionsHasDesiredLength) {
    throw new Error('Not enough data to build cards')
  }
  return catsFactsList.map((catsFact: any, index: number) => {
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