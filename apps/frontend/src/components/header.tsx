import MaxWidth from "./ui/max-width"
import { CTAs, EcomTraceLogo } from "./ui/navbar"

const Header = () => {
  return (
    <header className="relative w-full shadow-sm">
      <MaxWidth>
        <div className="relative w-full flex items-center justify-between py-6">
          <EcomTraceLogo />

          <CTAs />
        </div>
      </MaxWidth>
    </header>
  )
}

export default Header
