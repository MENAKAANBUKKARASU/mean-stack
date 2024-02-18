const { response } = require('express');
const http = require('http');
const data = JSON.stringify({
    title: 'MEAN'
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'DELETE', // PUT, POST, DELETE
    headers: {
        'Content-type': 'application/json',
        'Content-length': data.length
    }
};

const request = http.request(options, (response) => {
    response.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
});

request.on('error', (error) => {
    console.log(error);
});

// Move response.end() here
request.end();
