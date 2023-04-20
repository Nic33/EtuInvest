const { app, BrowserWindow, Menu} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800, // panel + border
    height: 600,

    minWidth: 550,
    maxWidth : 1000,

    webPreferences: {
/*       webSecurity : false,
      allowDisplayingInsecureContent: true,
      allowRunningInsecureContent: true,
 */
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  win.loadFile('index.html');
  
};

const template = [
  {
    label: 'Item 1',
    submenu: [
      {
        label: 'Item1.1'
      }, {
        label: 'Item1.2'
      }
    ]
  },{
    label: 'Item 2',
    submenu: [
      {
        label: 'Item2.1'
      }, {
        label: 'Item2.2'
      }
    ]
  }
]

app.whenReady().then(() => {

  //const menu = Menu.buildFromTemplate(template)
  //Menu.setApplicationMenu(menu)
  createWindow();

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {

      createWindow();
    }

  });

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
