const express = require('express');
//executing express
const app = express();
const path = require('path');
const redditData = require('./data.json')
console.log(redditData);
const port = 3003

//static files
app.use(express.static(path.join(__dirname,'public')))

//tell my app to use EJS 
app.set('view engine','ejs');
//after setting install ejs and thn by default when we create a new express app in our view engine thn express will assume we have our new templates in a directory so create a new directory and i named it as views
app.set('views',path.join(__dirname,'/views'))

//route
//below we tred to use ejs in file itself
app.get('/',(req,res)=>{
    res.render('home')
})

//below we gave const name and used this const in ejs file
app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('random', {num})
})


//using the reddit page, trying to demonstrate the path with a parameter like r/:subreddit.. It can be any name
app.get('/r/:subreddit',(req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    if (data){
      res.render("subreddit", { ...data });
    } else{
        res.render('notfound', {subreddit})
    }
})

//looping
app.get('/cats',(req,res)=>{
    const cats = [
        'Blue','Stephanie','Rocket','Monty','Winston'
    ]
    res.render('cats',{cats})
})




app.listen(port,() => {
    console.log(`LISTENING ON PORT ${port}`);
})