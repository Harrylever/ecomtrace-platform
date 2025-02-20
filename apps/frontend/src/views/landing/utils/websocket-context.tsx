import React, { createContext, useContext, useEffect, useState } from "react"

const WebSocketContext = createContext<WebSocket | undefined>(undefined)

export const WebSocketProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined)

  useEffect(() => {
    let ws: WebSocket
    let reconnectInterval: NodeJS.Timeout

    const connect = () => {
      ws = new WebSocket("ws://localhost:3001")

      ws.onopen = () => {
        console.log("WebSocket connection established")
        setSocket(ws)
        clearInterval(reconnectInterval)
      }

      ws.onclose = () => {
        console.log("WebSocket connection closed")
        setSocket(undefined)
        reconnectInterval = setInterval(connect, 5000)
      }

      ws.onerror = (error) => {
        console.error("WebSocket error:", error)
        ws.close()
      }
    }

    connect()

    return () => {
      ws.close()
      clearInterval(reconnectInterval)
      setSocket(undefined)
    }
  }, [])

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = () => useContext(WebSocketContext)
