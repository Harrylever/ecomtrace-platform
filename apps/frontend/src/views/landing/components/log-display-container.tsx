import MaxWidth from "../../../components/ui/max-width"
import LogDisplayGrid from "./log-display-grid"

const LogDisplayContainer = () => {
  return (
    <section className="pt-16 relative w-full">
      <MaxWidth>
        <div className="w-full p-6 rounded-2xl bg-white">
          {/* Label and Controls */}
          <div className="flex items-center justify-between">
            <p>hello</p>

            <div className="w-full"></div>
          </div>
          <LogDisplayGrid />
        </div>
      </MaxWidth>
    </section>
  )
}

export default LogDisplayContainer
