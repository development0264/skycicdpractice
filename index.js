import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/bye', (req, res) => {
  res.send('bye')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})