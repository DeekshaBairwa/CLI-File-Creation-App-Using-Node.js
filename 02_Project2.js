// CLI File Creation App

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const path = require("path");
const fs = require("fs");
var filepath;

rl.question("\nEnter the file name : ",(filename)=>{
    filepath = path.join(__dirname,filename);
    rl.question("Enter the data for the file : ",(data)=>{
        const createFile = fs.writeFileSync(filepath,data,"utf-8");
        console.log(createFile);
        console.log("File",filename,"Created Successfully!");
        rl.close();
    });
});