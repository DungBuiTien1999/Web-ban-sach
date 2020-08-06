const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
}));
app.use(express.static("contents"));

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/signup', (req, res)=>{
  res.render("vwAccount/signup");
})

app.get('/login', (req, res)=>{
  res.render("vwAccount/login");
})

app.listen(3000, () => {
    console.log('Web Server is runing at http://localhost:3000');
});