import { format, differenceInHours, subHours } from "date-fns"

const getOrdinal = (day: number) => {
  const suffixes = ["th", "st", "nd", "rd"]
  const value = day % 100
  return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]
}

export const formatDateOrTime = (dateString: string) => {
  const inputDate = new Date(dateString)
  const now = new Date()

  const diffHours = differenceInHours(now, inputDate)

  if (diffHours < 24) {
    return format(subHours(inputDate, 24), "HH:mm")
  } else {
    const day = format(inputDate, "d")
    const month = format(inputDate, "MMM")
    const year = format(inputDate, "yyyy")

    return `${day}${getOrdinal(Number(day))} ${month}, ${year}`
  }
}
