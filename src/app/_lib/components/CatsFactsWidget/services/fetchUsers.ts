import { API_PERSON_SEED, API_CATS_FACTS_LIMIT } from "@/lib/config"
import QueryFunctionArgs from "@/lib/core/types/QueryFunctionArgs.type"
import { CatsFactsApiErrors } from "../constants/errors"

export default async (params:QueryFunctionArgs) => {
  const pageParam = params.pageParam
  const url = `https://randomuser.me/api/?page=${pageParam.toString()}&results=${API_CATS_FACTS_LIMIT}&seed=${API_PERSON_SEED}`
  const response = await fetch(url)
  const data = await response.json()
  if(data.error) {
    throw new Error(CatsFactsApiErrors.API_ERROR_GENERAL)
  }
  return data
}