const express = require('express');

const PORT = parseInt(process.argv[2] || 3000);

app = express();

app.get('/number', (req, res) => {
    let number = Math.floor(Math.random() * 31);

    res.status(200);
    res.type('text/html');
    // res.sendFile(__dirname + `/public/images/numbers/number${number}.jpg`);

    res.send(`<img src='images/numbers/number${number}.jpg'>`);
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`App started at port ${PORT} on ${new Date()}`);
});