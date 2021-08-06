import express from 'express';
const app = express();


//++++++++++++++++++++++++++++++++++++++++++++++++++++

//res.locals;
app.use((req, res, next) => {
  console.log('middleware');
  next();
});


//++++++++++++++++++++++++++++++++++++++++++++++++++++
const one = (_req, _res, next) => {
  console.log('one')
  next();
};
const two = (_req, _res, next) => {
  console.log('two');
  next();
}

app.all('*', one, two)

app.all('*', (req, res, next) => {
  //res.end('works');
  next();
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++

app.param('id', function (req, res, next) {
  console.log('CALLED ONLY ONCE', req.params.id)
  next()
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++

//res.locals;
app.use((req, res, next) => {
  console.log('middleware');
  next();
});


//++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = { name: 'jura', age: 22 };

app.get('/user/:id', (req, res) => {
  res.end(JSON.stringify(req.params));
});

app.listen(8000);
