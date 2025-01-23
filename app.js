const express = require('express')
const app = express()
const port = 3000

//router
const postsRouter = require("./routers/postsRouters")

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

//registro le rotte
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})