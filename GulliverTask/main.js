const fs = require('fs');

fs.readFile("GulliverTask/input.txt", 'utf8', (err, data) => {
    if(err) {
        console.error(err)
        return;
    }

    let inputFileData = data.split(" ");

    let result = `${Math.pow(parseInt(inputFileData[0]), 2)*parseInt(inputFileData[1])}`

    fs.writeFile("GulliverTask/output.txt", result, err=>{
        if(err){
            console.error(err)
        }
    })

})