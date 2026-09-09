const fs = require('fs');

fs.writeFile('sample.txt','Welcome to full Stack Development',(err)=> {
    if(err) {
        console.log('Error in creating file',err);
        return;
    }
    console.log('File created successfully');
}
)


fs.readFile('sample.txt','utf-8',(err,data)=> {
    if(err) {
        console.log('Error reading file',err);
        return;
    }
    console.log('File content is: ');
    console.log(data);
}
)

//append
fs.appendFile('sample.txt','\nSemester: 3',(err) => {

    if(err){
        console.log('Error updating file: ',err);
    }else{
        console.log('\n3. File updated successfully!');
    }
})

//Delete

fs.unlink('example.txt',(err) => {

    if(err){
        console.error('Error deleting file: ',err);
    }else{
        console.log('\n4. File deleted successfully!');
    }
})
