const { app, BrowserWindow } = require("electron");
const path = require("path");
let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    transparent: true,
    frame: false,
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  app.on('will-quit', function () {
    console.log("will-quit");
    mainWindow = null;
});
  mainWindow.loadFile("index.html");
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});