import MaxWidth from "../../../components/ui/max-width"
import { Plus } from "lucide-react"

const HeadSection = () => {
  return (
    <div className="relative w-full pt-16">
      <MaxWidth>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold font-raleway text-color-text-primary">
              Monitoring Summary
            </h3>

            <div>
              <button>
                <Plus size={20} className="text-color-text-primary" />
                <p className="text-sm font-raleway text-color-text-primary">
                  Create new view
                </p>
              </button>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default HeadSection
