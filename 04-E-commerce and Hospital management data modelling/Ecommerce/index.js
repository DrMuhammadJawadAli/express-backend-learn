import express from 'express'
import dotenv from 'dotenv'
dotenv.congfig()

const app = express()
const PORT = 3000


app.get('/', (req, res)=>{
    app.res("hello there hows your ")
})

app.listen(PORT, ()=>{
    console.log(`app is working on this ${} port`)
})