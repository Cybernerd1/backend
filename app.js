const express = require ('express')
const morgan = require('morgan')
const app = express()
const dbconnection = require('./config/db')
const userModel = require('./models/user')



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine",'ejs')

// middleware

app.use((req,res,next)=>{
    console.log("This is middleware")
    const a=2
    const b=3

    console.log(a+b)
    return next()
})



app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body)
    res.send('data received')
})

app.get('/about',(req,res)=>{
    res.send("bhai ye about page hai")
})

app.get('/profile',(req,res)=>{
    res.send("are bhai ek chij kitne baar test krega, sab sahi chal rha h tera")
})

app.get('/register',(req,res) =>{
    res.render('register')
})

app.post('/register',async (req,res) =>{
    
    const {username, email, password} =req.body 

    const newUser = await userModel.create({
        username: username,
        email:email,
         password:password,
    })
    console.log(newUser)
    // res.send('user register')
    res.send(newUser)
})


app.listen(3001)