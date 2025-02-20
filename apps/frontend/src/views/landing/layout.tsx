import { WebSocketProvider } from "./utils/websocket-context"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <WebSocketProvider>{children}</WebSocketProvider>
}
