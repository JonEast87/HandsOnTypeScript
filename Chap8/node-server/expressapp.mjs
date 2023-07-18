import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello world. I am custom middleware.');
});

app.listen({ port: 8000 }, () => {
    console.log('Express Node server has loaded.');
});