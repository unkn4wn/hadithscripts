var XMLHttpRequest = require("xhr2");
const fs = require("fs");

const numberarray = [3956,5761,3956,4341,6294];
const namearray = ["tirmizi","nasai","abudawood","ibnemaja","mishkaat"];


function createfolders() {

  const mainfolderPath = './zubair';
  // create main folder "zubair"
  fs.stat(mainfolderPath, (err, stats) => {
    if (err) {
      // The folder doesn't exist, so create it
      fs.mkdir(mainfolderPath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Folder created successfully!');
        }
      });
    } else {
      // The folder already exists, so do nothing
      console.log('Folder already exists');
    }
  });

  for (var i = 0; i < namearray.length; i++) { 
  const folderPath = './zubair/' + namearray[i];
  fs.stat(folderPath, (err, stats) => {
    if (err) {
      // The folder doesn't exist, so create it
      fs.mkdir(folderPath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Folder created successfully!');
        }
      });
    } else {
      // The folder already exists, so do nothing
      console.log('Folder already exists');
    }
  });
}
}

function get(url) {
   return new Promise(function (resolve, reject) {
     var xhr = new XMLHttpRequest();
 
     xhr.open("GET", url);
 
     xhr.onload = function () {
       if (xhr.status === 200) {
         resolve(xhr.responseText);
       } else {
         reject(Error(xhr.statusText));
       }
     };
 
     xhr.onerror = function () {
       reject(Error("Network Error"));
     };
 
     xhr.send();
   });
 }
 
 async function fetchAndWrite() {
  for (var j = 0; j<namearray.length;j++) {
    //eigentlich numberarray[j]
   for (var i = 1; i <= numberarray[j]; i++) {
     try {
       var response = await get("https://dashingquill.com/js/"+namearray[j]+"/" + i + ".js");
       
       fs.writeFile("./zubair/" + namearray[j] +"/" + i + ".js", response, (err) => {
         if (err) throw err;
         console.log("The file has been saved!" + i);
         console.log(numberarray[j] + namearray[j]);
       });
     } catch (error) {
       console.log(error);
     }
   }
  }
 }

 createfolders();
 fetchAndWrite();