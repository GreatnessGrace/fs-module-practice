// File System  - Promise API

// const fs = require('fs/promis'); // Normal Syntax

import * as fs from "fs/promises"; //ES6 Syntax : For this Syntax to be able to use we need to add "type":module in our package.json file

// Directories :
// 1. Creating directory : path should be there :

// try {
//   await fs.mkdir("c:\\NodeJs\\Day6\\");
//   console.log("Directpory Successfully Created");
// } catch (error) {
//   console.log(error);
// }

// // 1. Creating directory :If path is not  there : // We have to add a parameter recursive as true to make a directory if a path is not fully present
// try {
//   await fs.mkdir("c:\\NodeJs\\Day6\\File_System\\promise_bAsed_api", {
//     recursive: true,
//   });
//   console.log("Directpory Successfully Created");
// } catch (error) {
//   console.log(error);
// }

// 3. Read content inside a file

// try {
//   const content = await fs.readdir("c://NodeJS//Day6//File_System//");
//   for (const file of content) console.log(file);
// } catch (error) {
//   console.log(error);
// }

// 4. Remove a directory - Directory should be empty :
// try {
//   await fs.rmdir("C://NodeJS//demo");
//   console.log("Directory Removed ..");
// } catch (error) {
//   console.log(error);
// }

//Files  :
// 5.  Create and write the files :
// try {
//   await fs.writeFile("c://NodeJS//Day6//readme.txt", "Hello Node Js ");
//   console.log("file Created")  // If we run same code again it will replace the already existed file
// } catch (error) {
//   console.log(error);
// }

// 6. Read File

// i.
// try {
//   const data = await fs.readFile("c://NodeJS//Day6//readme.txt");     // It will return the buffer :- <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 20 4a 73 20>
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// ii.
// We do not wanted output in a buffer format so we need to put a encoding option i.e. utf-8

// try {
//   const data = await fs.readFile("c://NodeJS//Day6//readme.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// 7. Append data :- i.e. We wanted to put our text in already existing file :
// try {
//   await fs.appendFile(
//     "c://NodeJS//Day6//readme.txt",
//     "How you feel after Appending , You even can add data in an object"
//   );
//   console.log("The data is succesfully added");
// } catch (error) {
//   console.log(error);
// }

// 8. Copy File :
// try {
//   await fs.copyFile(
//     "c://NodeJS//Day6//readme.txt",
//     "c://NodeJS//Day6//readme2.txt"
//   );  // It will first Create the file and then it will copy the content
//   console.log("File is succesfully Copied");
// } catch (error) {
//   console.log(error);
// }

// 9. stat :  Get file Information :
// try {
//   const stats = await fs.stat("c://NodeJS//Day6//readme.txt");
//   console.log(stats.isDirectory()); // stats returns an object which have many methods to use
//   console.log(stats.isFile());
//   console.log(stats);
// } catch (error) {
//   console.log(error);
// }
