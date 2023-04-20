const fs = require('fs');

//https://welovedevs.com/fr/articles/how-to-use-node-fs/

function getAppDataPath() {
    switch (process.platform) {
      case "darwin": {
        return process.env.HOME + "/Library/Application Support/my-electron-app";
      }
      /* case "win32": {
        return process.env.APPDATA+ "/my-electron-app";
      }
      case "linux": {
        return process.env.HOME + "/.local/share/.my-electron-app";
      } */
      default: {
        console.log("Unsupported platform!");
        process.exit(1);
      }
    }
  }
  
CreateFile();
ReadAll();

function CreateFile() {
    const appDatatDirPath = getAppDataPath();
    
    // Create appDataDir if not exist
    if (!fs.existsSync(appDatatDirPath)) {
        fs.mkdirSync(appDatatDirPath);
    }

    const appDataFilePath = appDatatDirPath + '/sauvegarde.txt';

    // Create file if not exist
    if (!fs.existsSync(appDataFilePath)) { 

      var mytext = "Name : \n" + " Values : \n";

      fs.writeFile(appDataFilePath, mytext, function (err) {
        if (err) {
          console.error("file creation failed")
        } else {
          console.log('File created : '+ appDatatDirPath + '/sauvegarde.txt');
        }  
      }); 

    }

}

function ReadAll(){

  const appDatatDirPath = getAppDataPath();
  const appDataFilePath = appDatatDirPath + '/sauvegarde.txt';

  console.log("Location : " + appDataFilePath); 

  fs.readFile(appDataFilePath, 'utf8', function(err, data) {
    const content = data;   
    console.log(content); 
  });
    
}

function WriteValue(name){
  
}


