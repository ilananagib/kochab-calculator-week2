let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.post('/add-numbers', (req, res) => {
    res.sendStatus(200);
});

app.post('/subtract-numbers', (req, res) => {
    res.sendStatus(200);
});

app.post('/divide-numbers', (req, res) => {
    res.sendStatus(200);
});

app.post('/multiply-numbers', (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});