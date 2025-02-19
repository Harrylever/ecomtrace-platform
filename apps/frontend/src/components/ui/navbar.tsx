import { Link } from "react-router-dom"

export const EcomTraceLogo = () => {
  return (
    <div>
      <Link to="/">
        <p className="font-raleway text-3xl font-bold text-amber-800">
          EcomTrace APM
        </p>
      </Link>
    </div>
  )
}

export const CTAs = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-end gap-4">
          {LINKS.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>
                <p className="text-base font-raleway font-medium text-color-text-secondary hover:text-color-text-primary duration-300">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const LINKS = [
  {
    id: 1,
    title: "About",
    href: "/about",
  },
]
