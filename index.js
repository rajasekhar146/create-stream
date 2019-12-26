var fs = require('fs')
const util = require('util');

const readFile = util.promisify(fs.readFile);

// fs.readFile('file.txt', 'utf8', function(err, data){
//     if(!err) {
//         console.log(data)
//     }
// });


var readFileFun = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(!err) {
                resolve(data);
            } else {
                reject(err)
            }
        })
    }) 
}


// var readFileFun = async function() {
//     try{
//         data = await readFile('file.txt', 'utf8')
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err)
//     }
    
// }
var writeFile = function(file, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err, data) => {
            if(!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

readFileFun('file.txt').then((res) => {
    writeFile('textFile.txt', res)
    console.log(res)
}).then((res) => {
    console.log("task compleated")
});
console.log("hi hellow");