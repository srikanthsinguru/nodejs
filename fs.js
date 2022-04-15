const fs = require('fs');
// fs.readFile('./example/ex1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//         console.log(data.toString());
// });
// console.log('end of fs');

// fs.writeFile('./example/ex1.txt', 'write the file' , () =>{
//      console.log('file was edited');
// });

// fs.writeFile('./example/ex2.txt', 'Rewrite the file' , () =>{
//     console.log('file was edited');
// });

// if(!fs.existsSync('./srikanth')){
//     fs.mkdir('./srikanth',(err) =>{
//         if(err){
//             console.log(err);
//         }
//             console.log('folder created');
//     });
// }else{
//     fs.rmdir('./srikanth', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }
if(fs.existsSync('./srikanth/sri.ods')){
    fs.unlink('./srikanth/sri.ods', (err) =>{
        if(err){
            console.log(err);
        }
            console.log('file deleted');
    });
          
}
else{
    fs.writeFile('./srikanth/sri.ods', 'write the file', ()=>{
        console.log('file created');
    })
};

