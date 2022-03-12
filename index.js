const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(`${getTimeAndServerActivityStamp()} Page Request`);
    res.send("Welcome")
});


app.listen(3000);

const getTimeAndServerActivityStamp = () => {
    let date = new Date();
    let stamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} [Server Activity] : `;
    return stamp;
}

console.log(`${getTimeAndServerActivityStamp()} Server Started`);