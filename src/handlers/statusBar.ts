import * as vscode from 'vscode'

import { updateWebSocketStatusBar, setWsStatusBarItem } from '../websocket.js'

export function createRestartStatusBarItem(context: vscode.ExtensionContext) {
  const restartStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100,
  )
  restartStatusBarItem.command = 'restartRobloxStudioSimulator.restart'
  restartStatusBarItem.text = '$(refresh) Restart Roblox Studio Simulator'
  restartStatusBarItem.tooltip = 'Restart Roblox Studio Simulator'
  restartStatusBarItem.show()
  context.subscriptions.push(restartStatusBarItem)
  return restartStatusBarItem
}

export function createWebSocketStatusBarItem(
  context: vscode.ExtensionContext,
): vscode.StatusBarItem {
  const wsStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    99,
  )
  wsStatusBarItem.text = '$(debug-disconnect) WebSocket Running'
  wsStatusBarItem.tooltip = 'Click to stop WebSocket'
  wsStatusBarItem.command = 'restartRobloxStudioSimulator.stopWebSocket'
  wsStatusBarItem.show()
  context.subscriptions.push(wsStatusBarItem)
  setWsStatusBarItem(wsStatusBarItem)
  updateWebSocketStatusBar()
  return wsStatusBarItem
}
