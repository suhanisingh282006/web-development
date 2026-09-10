const fs = require("fs").promises;

async function writeFile(){
    try{
        await fs.writeFile("promises.txt","Hello Students!");
        console.log("File created and data written successfully.");
    } catch (error){
        console.log("Error:",error);
    }
}

writeFile();

// read file
async function readFile(){
    try{
        const data = await fs.readFile("promises.txt","utf-8");
        console.log("File content is: ",data);
    } catch (error){
        console.log("Error:",error);
    }
}

readFile();

// rename file
async function renameFile(){
    try{
        await fs.rename("promises.txt","promises_renamed.txt");
        console.log("File renamed successfully.");
    } catch (error){
        console.log("Error:",error);
    }
}

renameFile();

// update file
async function appendFile(){
    try{
        await fs.appendFile("promises_renamed.txt","\nThis is the new line of the file");
        console.log("File updated successfully.");
    } catch (error){
        console.log("Error:",error);
    }
}

appendFile();

// delete file
async function deleteFile(){
    try{
        await fs.unlink("promises_renamed.txt");
        console.log("File deleted successfully.");
    } catch (error){
        console.log("Error:",error);
    }
}

deleteFile();   