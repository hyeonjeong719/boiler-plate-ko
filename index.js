const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyeonjeong:cat1921@cluster0.f8ijj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  //useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongDB Connected...'))
  .catch(err=>console.log(err))



app.get('/', (req, res) =>  res.send('Hello World! ~ 안녕하세요~')
)

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`))
