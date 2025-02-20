export interface ILog {
  type: "error-tracing" | "speed-monitoring" | "session-replay"
  message: string
  author: string
  dateTime: string
}
