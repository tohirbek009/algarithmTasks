const fs = require('fs')

fs.readFile("TriangleTask/input.txt", 'utf8', (err, data)=>{
    if(err){
        console.error(err)
        return;
    }

    let givenNumber = parseInt(data);
    let allTriangle = 0;

    const firstFormula = (n) => {
        total = 0;
        for(let i = 1; i <= givenNumber; i++){
            total += i*(givenNumber-i);
        }
        return total + Math.pow(n, 2);
    }

    const secondFormula = (n) => {
        let m = n - 3;
        let total = 0;
        while(m > 0){
            total += (1 + m)*m/2;
            m -= 2;
        }
        return total;
    }

    if(givenNumber < 4) allTriangle = firstFormula(givenNumber);
    else allTriangle = firstFormula(givenNumber) + secondFormula(givenNumber)

    fs.writeFile("TriangleTask/output.txt", `${allTriangle}`, err=>{
        if(err) {
            console.error(err)
            return;
        }
    })

})