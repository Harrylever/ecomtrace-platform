import { useEffect, useState } from "react"
import { Loader, RotateCcw } from "lucide-react"
import { ILog } from "../../../lib/types"
import { AgGridReact } from "ag-grid-react"
import type { ColDef } from "ag-grid-community"
import { useGetLogs } from "../../../api/hooks/useLogs"
import { useWebSocket } from "../utils/websocket-context"
import { formatDateOrTime } from "../../../utils/date-time-formatter"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community"

ModuleRegistry.registerModules([AllCommunityModule])

const LogTypeMap: Record<ILog["type"], string> = {
  "error-tracing": "Error tracing",
  "speed-monitoring": "Speed monitoring",
  "session-replay": "Session replay",
}

const LogDisplayGrid = () => {
  const socket = useWebSocket()
  const { data: logsResponse, isFetching, isError, refetch } = useGetLogs()

  const [rowData, setRowData] = useState<ILog[]>([])

  const [colDefs] = useState<ColDef<ILog>[]>([
    { field: "type" },
    { field: "message" },
    { field: "author" },
    { field: "dateTime", headerName: "Date" },
  ])

  useEffect(() => {
    if (!isError && logsResponse) {
      setRowData(
        logsResponse.data.data.map((log) => {
          return {
            type: LogTypeMap[log.type] as ILog["type"],
            message: log.message,
            author: log.author,
            dateTime: formatDateOrTime(log.dateTime),
          }
        })
      )
    }
  }, [isError, logsResponse])

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const realTime = JSON.parse(event.data) as {
          message: string
          data: ILog[]
        }

        setRowData(realTime.data)
      }
    }
  }, [socket])

  const defaultColDef = {
    flex: 1,
  }

  if (isFetching) {
    return (
      <div className="w-full flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <RotateCcw size={20} />
          <p className="font-raleway">Failed to fetch logs.</p>
        </div>

        <button
          type="button"
          onClick={() => {
            refetch()
          }}
          className="mt-2 font-raleway bg-black/10 py-2 px-5 rounded-lg"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <section className="w-full">
      <div className="h-[500px]">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </section>
  )
}

export default LogDisplayGrid
