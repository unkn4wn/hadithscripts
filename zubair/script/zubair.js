var XMLHttpRequest = require("xhr2");
const fs = require("fs");

var tirmizinumber = 3956;
var nasainumber = 5761;
var abudawoodnumber = 3956;
var ibnemajanumber = 4341;
var mishkaatnumber = 6294;



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
   for (var i = 1; i <= mishkaatnumber; i++) { //change mishkaatnumber to tirmizinumber,nasainumber etc...
     try {
       var response = await get("https://dashingquill.com/js/mishkaat/" + i + ".js"); //change mishkaat to tirmizi,nasai,abudawood or ibnemaja if you want to scrape another collection
       
       fs.writeFile("./zubair/mishkaat/" + i + ".js", response, (err) => { //create a folder and change the file path to your folder
         if (err) throw err;
         console.log("The file has been saved!" + i);
       });
     } catch (error) {
       console.log(error);
     }
   }
 }
 
 fetchAndWrite();