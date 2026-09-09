const fs= require('fs');

fs.writeFileSync('example.txt', 'This is experiment 2 in FSD Workshop','utf-8');

console.log('create file run successfully');

// const data=fs.readFileSync('example.txt','utf-8');
// console.log('file content is: ',data);

fs.appendFileSync('example.txt','\nThis is the new line of the file','utf-8');
console.log('append file run successfully');

// fs.unlinkSync('student1.txt');
// console.log('student1 file is deleted');

fs.mkdirSync('sample folder');
console.log('a new folder is created');

// fs.rmdirSync('sample folder');
// console.log('new folder is deleted');

if(fs.existsSync('secastudent.txt')) {
    console.log('file exists');
} else {
    console.log('file not found, need to create this file');
}