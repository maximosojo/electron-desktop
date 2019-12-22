const {app, BrowserWindow} = require('electron');
const macaddress = require('macaddress');

const path = require("path");
const url = require("url");

let win;
const basePath = "https://www.google.com/";

function createWindow(){
   	win = new BrowserWindow({width : 500, height : 500});
      // win.maximize()
      // win.show()
   
   // win.loadFile("index.html");
   // win.loadURL(url.format({
   // 	pathname: path.join(__dirname, 'index.html'),
   // 	protocol: "file",
   // 	slashes: true
   // }))
      win.loadURL(basePath);
   	// macaddress.one(function (err, mac) {
   	//    win.loadURL(basePath+mac);
   	//      console.log("Mac address for this host: %s", mac);  
   	// });
}

app.on("ready", createWindow);