import MaxWidth from "../../../components/ui/max-width"
import LogDisplayGrid from "./log-display-grid"
import LogDisplayGridControls from "./log-display-grid-controls"

const LogDisplayContainer = () => {
  return (
    <section className="pt-16 relative w-full">
      <MaxWidth>
        <div className="w-full p-6 rounded-2xl bg-white flex flex-col gap-4">
          {/* Label and Controls */}
          <div className="flex items-center justify-between">
            <p className="text-base font-raleway font-medium">All logs</p>

            <LogDisplayGridControls />
          </div>

          {/* Log Grid/Table */}
          <LogDisplayGrid />
        </div>
      </MaxWidth>
    </section>
  )
}

export default LogDisplayContainer
