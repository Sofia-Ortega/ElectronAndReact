const {app, BrowserWindow} = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //to get access to Chrome dev tools
  win.webContents.openDevTools()

  //gets our React app running on localhost and displays it in the Electron window
  win.loadURL('http://localhost:3000/')
}

app.whenReady().then(createWindow)

//quits app when you try to exit out
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//when app ready to go, electron window opens
app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length == 0) {
    createWindow()
  }
})
