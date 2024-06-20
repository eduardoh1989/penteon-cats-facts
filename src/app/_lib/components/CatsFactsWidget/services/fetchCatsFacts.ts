import { API_CATS_FACTS_LIMIT } from "@/lib/config"
import QueryFunctionArgs from "@/lib/core/types/QueryFunctionArgs.type"

export default async (params:QueryFunctionArgs) => {
  const url = `https://catfact.ninja/facts?limit=${API_CATS_FACTS_LIMIT}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}