import http from 'htpp';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello world');
    } else if (req.url === '/a') {
        res.end('welcome to route a');
    } else if (req.url === '/b') {
        res.end('welcome to route b');
    } else {
        res.end('good bye');
    }
});