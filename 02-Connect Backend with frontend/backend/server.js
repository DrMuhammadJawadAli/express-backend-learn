import 'dotenv/config'; 
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("dist"));
// this is for serve the static file from dist folder so you dont need to use the localhost:3000/dist to access the file you can directly use localhost:3000/filename adn it can help you to cost less time to access the file and also it can help you to avoid the CORS error when you are trying to access the file from the frontend and backend are running on different port

// app.get('/', (req, res)=>{
//     res.send('This is the Home Page')
// })
app.get('/api/jokes', (req, res)=>{
    const jokes = [
  {
    id: 1,
    title: "Dark Mode Logic",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    title: "Binary People",
    content: "There are only 10 types of people in the world: those who understand binary and those who don't."
  },
  {
    id: 3,
    title: "SQL Bar",
    content: "A SQL query walks into a bar and asks two tables: 'Can I join you?'"
  },
  {
    id: 4,
    title: "Java Vision",
    content: "Why do Java developers wear glasses? Because they don’t C#."
  },
  {
    id: 5,
    title: "Computer Break",
    content: "I told my computer I needed a break, and it said: 'No problem — I’ll go to sleep.'"
  }
];
    res.send(jokes)
})


app.listen(process.env.PORT, ()=>{
    console.log(`you app is listen on the ${port}`);
    
})