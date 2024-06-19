import { API_PERSON_SEED, API_CATS_FACTS_LIMIT } from "@/lib/config"
import QueryFunctionArgs from "@/lib/core/types/QueryFunctionArgs.type"

export default async (params:QueryFunctionArgs) => {
  const pageParam = params.pageParam
  const url = `https://randomuser.me/api/?page=${pageParam.toString()}&results=${API_CATS_FACTS_LIMIT}&seed=${API_PERSON_SEED}`
  const response = await fetch(url)
  return response.json()
}