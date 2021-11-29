const fs = require('fs');

fs.readFile("CardTask/input.txt", 'utf8', (err, data) => {
    if(err) {
        console.error(err)
        return;
    }

    let inputFileData = data.split(" ");
    let p = parseInt(inputFileData[0]);
    let k = parseInt(inputFileData[1]);

    let totalCycle = 0

    for (let i = p; i < k+1; i++){
        let count = 0;
        let n = i;
        while(n!==2){
            if(n%2===0){
                n = n / 2;
            }else{
                n = n * 3 + 1;
            }
            count++
        }
        totalCycle += count;
        var natija = `${totalCycle}`
    }

    fs.writeFile("CardTask/output.txt", natija, err => {
        if (err){
            console.error(err)
            return;
        }
    } )

})