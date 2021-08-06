import express from 'express';

const app = express();


app.get('/get', (_req, res) => {
  res.end('get');
});

app.post('/post', (_req, res) => {
  res.end('post');
});

app.put('/put', (_req, res) => {
  res.end('put');
});

app.delete('/delete', (_req, res) => {
  res.end('delete');
});


app.listen(8000);
