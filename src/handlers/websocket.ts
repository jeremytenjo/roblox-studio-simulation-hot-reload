import type { WebSocket } from 'ws'

import { broadcast } from '../websocket.js'
import { PACKAGE_NAME } from '../constants.js'

type RestartMessage = {
  type: 'restart'
  source: string
  timestamp: number
}

export function parseRestartMessage(
  data: string,
  clientIp: string,
): RestartMessage | null {
  try {
    const message = data.toString()
    console.log(`${PACKAGE_NAME}: Received message from ${clientIp}: ${message}`)

    const parsed = JSON.parse(message)
    console.log(`${PACKAGE_NAME}: Parsed message:`, parsed)

    if (parsed && parsed.type === 'restart') {
      console.log(`${PACKAGE_NAME}: ✓ Valid restart message from ${parsed.source}`)
      return {
        type: 'restart',
        source: parsed.source ?? 'roblox',
        timestamp: Date.now(),
      }
    } else {
      console.warn(`${PACKAGE_NAME}: Unknown message type: ${parsed?.type}`)
    }
  } catch (err) {
    console.error(`${PACKAGE_NAME}: Failed to parse message:`, err)
    console.error(`${PACKAGE_NAME}: Raw data: ${data.toString()}`)
  }
  return null
}

export function setupWebSocketSocketHandlers(socket: WebSocket, clientIp: string) {
  socket.on('close', (code, reason) => {
    console.log(`${PACKAGE_NAME}: Client disconnected (code: ${code}, reason: ${reason})`)
  })

  socket.on('error', (err) => {
    console.error(`${PACKAGE_NAME}: Socket error:`, err)
  })

  socket.on('message', (data) => {
    const msg = parseRestartMessage(data.toString(), clientIp)
    if (msg) {
      broadcast(msg)
    }
  })
}
