import { useState } from "react"
import { AgGridReact } from "ag-grid-react"
import type { ColDef } from "ag-grid-community"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community"

ModuleRegistry.registerModules([AllCommunityModule])

interface IRow {
  type: "error-tracing" | "speed-monitoring" | "system-replay"
  message: string
  author: string
  dateTime: string
}

const LogDisplayGrid = () => {
  const [rowData, setRowData] = useState<IRow[]>([
    { type: "error-tracing", message: "Model Y", author: "", dateTime: "" },
    { type: "speed-monitoring", message: "Model Y", author: "", dateTime: "" },
    { type: "error-tracing", message: "Model Y", author: "", dateTime: "" },
    { type: "system-replay", message: "Model Y", author: "", dateTime: "" },
  ])

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "type" },
    { field: "message" },
    { field: "author" },
    { field: "dateTime" },
  ])

  const defaultColDef = {
    flex: 1,
  }

  return (
    <section className="w-">
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
