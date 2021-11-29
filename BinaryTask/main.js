const fs = require('fs');
let albhabit = "abcdefghijklmnopqrstuvwxyz"
let countZero = 0;
let result = "";


fs.readFile('BinaryTask/input.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err)
        return;
    }

    for(let i=0; i<data.length; i++){
        if(data[i] !== "1"){
            countZero++;
        }else{
            if(countZero>25){
                result += ("0".repeat(countZero-25) + "z")
            }else{
                result += albhabit[countZero];
            }
            countZero = 0;
        }
    }

    fs.writeFile("BinaryTask/output.txt", result, err => {
        if(err){
            console.error(err)
            return;
        }
    })

})

console.log("u"*4)



// const content = "content to write output.txt file";
// fs.writeFile("BinaryTask/output.txt", content, err => {
//     if (err){
//         console.error(err)
//         return;
//     }
// })