import { useQuery } from "@tanstack/react-query"
import axiosInstance from ".."
import { ILog } from "../../lib/types"

export function useGetLogs() {
  return useQuery<{
    data: {
      data: ILog[]
      message: string
    }
  }>({
    queryKey: ["get-all-logs"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return await axiosInstance.get("/activities/logs")
    },
  })
}
