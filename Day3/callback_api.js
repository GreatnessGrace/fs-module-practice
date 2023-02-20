// File System using Callback API // Async API
// const fs = require('fs')

import * as fs from "fs";

// 1.  Creating directory - Path should be there
// fs.mkdir('c:\\NodeJs//Day6\\async_api_or_callback_api', function(error){
//     if(error) throw error;
//     console.log("Directory Created ... ")
// })  // We can also use a arrow function instead of this function syntax

// Same example using arrow function :
// fs.mkdir('c:\\NodeJs//Day6\\async_api_or_callback_api',(error)=> {
//     if(error) throw error;
//     console.log("Directory Created ... ")
// })

// 2.  Read Content of the directory :
// fs.readdir("c:\\NodeJs//Day6", (error, files) => {
//   if (error) throw error;
//   for (const file of files) console.log(file);
// });

// 3. Read the file :
// fs.readFile("c:\\NodeJs//Day6//readme.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });
