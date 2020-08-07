const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
}));
app.use(express.static("contents"));

app.set('view engine', 'hbs');

//khai báo các thẻ link css và bootstrap-View nào dùng thì gửi kèm ra cho view đó
var signupCss='<link rel="stylesheet" href="../css/signup.css">';
var bootstrap400='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />';
var fontawesome470='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />';
var bootstrap431='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
var fontawesome5121='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">';
var loginCss=' <link rel="stylesheet" href="../css/login.css">';

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
var signupJs='<script type="text/javascript" src="../js/signup.js"></script>';
var loginJs=' <script type="text/javascript" src="../js/login.js"></script>';
var popper1129Js='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
var bootstrap400Js=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
var popper1147Js='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
var bootstrap431Js=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
var sweetalert2Js=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
var promisePolyfillJs='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
var numeralJs=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
var tinymceJs=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';

app.get('/', function (req, res) {
  res.render('home', {
    bootstrap400:bootstrap400,
     bootstrap431:bootstrap431,
    title:"Book Store"});
});

app.get('/signup', (req, res)=>{
  res.render("vwAccount/signup",{
    title:"Signup",
    SignupCss:signupCss,
     fontawesome5121:fontawesome5121,
      fontawesome470:fontawesome470,
      signupJs:signupJs});
});

app.get('/login', (req, res)=>{
  res.render("vwAccount/login",
  {
    title:"Login",
    loginCss:loginCss,
    fontawesome470:fontawesome470,
    fontawesome5121:fontawesome5121,
    loginJs:loginJs});
});

app.listen(3000, () => {
    console.log('Web Server is runing at http://localhost:3000');
});