import { cn } from "../../lib/utils"

const MaxWidth = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "relative max-w-5xl px-8 sm:px-6 2xl:px-0 mx-auto",
        className
      )}
    >
      <div>{children}</div>
    </div>
  )
}

export default MaxWidth
