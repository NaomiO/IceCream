const CSVToJSON = require("csvtojson");
//const fs = require("fs");

/*CSVToJSON().fromFile("./city_data.csv").then(source => {
    let json = JSON.stringify(source);
    fs.writeFileSync('city_data.json', json);
});*/
const fs = require('fs');
let jsonData = fs.readFileSync('city_data.json', 'utf8');
let data = JSON.parse(jsonData);
console.log(data);
