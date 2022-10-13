const express = require('express')
const app = express()
const port = 3001
var cors= require('cors')

app.use(cors())

app.get('/', (req, res) => {
    
    res.send('Hello World!')
})


/*app.get('/user/:id', (req, res) => {
    const q= req.params
    console.log(q.id)

    res.json({'userid':q.id})
})*/

app.get('/user/:id', (req, res) => {

    const p= req.params
    console.log(p)
    const q=req.query
//    console.log(q.q)
    res.json({'userid':q})


})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
