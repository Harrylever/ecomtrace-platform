import { Search } from "lucide-react"

const LogDisplayGridControls = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      {/* Search */}
      <div>
        <label htmlFor="search-log" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="relative z-10 w-[150px] py-1.5 pl-7 pr-3.5 rounded-lg border border-black/20 focus:outline-none text-sm font-raleway"
          />
          <Search
            className="absolute z-20 left-2 top-1/2 -translate-y-1/2 text-color-text-secondary"
            size={15}
          />
        </div>
      </div>
    </div>
  )
}

export default LogDisplayGridControls
