import { API_PERSON_SEED, API_PERSON_LIMIT } from "@/lib/config"

export default async (params:any) => {
  const pageParam = params.pageParam
  const url = `https://randomuser.me/api/?page=${pageParam.toString()}&results=${API_PERSON_LIMIT}&seed=${API_PERSON_SEED}`
  const response = await fetch(url)
  return response.json()
}