const express = require('express');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    render(res, 'index.html');
});

app.get('/about', (req, res) => {
    render(res, 'about.html');
});

app.get('/contact', (req, res) => {
    render(res, 'contact.html');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

const render = (res, file) => {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            // Handle the error, for example, send a 500 Internal Server Error response
            res.status(500).send('Internal Server Error');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(data);
    });
};
