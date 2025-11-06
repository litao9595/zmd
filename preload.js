// preload.js - 预加载脚本
// 在渲染进程加载之前执行，可以安全地暴露特定的 API 给渲染进程

const { contextBridge, ipcRenderer } = require('electron');

// 通过 contextBridge 暴露 API 到渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 示例：暴露一个获取平台信息的方法
  getPlatform: () => process.platform,
  
  // 暴露版本信息
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  },
  
  // 你可以在这里添加更多需要暴露给渲染进程的 API
  // 例如：
  // sendMessage: (message) => ipcRenderer.send('message', message),
  // onReply: (callback) => ipcRenderer.on('reply', callback)
});


