const fs = require("fs");

fs.readFile('TitanicTask/input.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    let dataArr = data.split("\r\n");

    let AllCoordinates = [
        [dataArr[3].split(" ")[0], dataArr[3].split(" ")[1]], 
        [dataArr[4].split(" ")[1], dataArr[4].split(" ")[2]], 
        [dataArr[6].split(" ")[0], dataArr[6].split(" ")[1]],
        [dataArr[7].split(" ")[1], dataArr[7].split(" ")[2]]
    ]

    let latArr=[], lonArr=[];
    
    let lat1, lat2, lon1, lon2;

    for(let i=0; i<4; i++){
        if(AllCoordinates[i][1] === "NL" || AllCoordinates[i][1] === "SL" || AllCoordinates[i][1] === "NL." || AllCoordinates[i][1] === "SL."){
            latArr.push(AllCoordinates[i][0]);
        }else lonArr.push(AllCoordinates[i][0]);
    }

    const calculateGradus = (cordinate) => {
        let gradus = cordinate.split("^")[0];
        let min = cordinate.split("^")[1].split("'")[0];
        let secund = cordinate.split("^")[1].split("'")[1].split(`"`);

        let result = parseInt(gradus) + parseInt(min)/60 + parseInt(secund)/3600;

        return result;
    }

    lat1 = calculateGradus(latArr[0]); lat2 = calculateGradus(latArr[1]);
    lon1 = calculateGradus(lonArr[0]); lon2 = calculateGradus(lonArr[1]);

    const R = 6371e3; // metres
    const fi1 = lat1 * Math.PI/180; // φ, λ in radians
    const fi2 = lat2 * Math.PI/180;
    const _fi = (lat2-lat1) * Math.PI/180; // delta fi;
    const _lamb = (lon2-lon1) * Math.PI/180;  // delta lambda;

    const a = Math.sin(_fi/2) * Math.sin(_fi/2) +
              Math.cos(fi1) * Math.cos(fi2) *
              Math.sin(_lamb/2) * Math.sin(_lamb/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres

    // 1metr = 0.000621371192 mile;

    let warningMessage = "";
    if(0.000621371192*d < 100){
        warningMessage += "DANGER!"
    }

    let result = `The distance to the iceberg: ${(0.000621371192*d).toFixed(2)} miles.\n${warningMessage}`

    fs.writeFile('TitanicTask/output.txt', result, err=>{
        if(err){
            console.error(err)
            return;
        }
    })

})