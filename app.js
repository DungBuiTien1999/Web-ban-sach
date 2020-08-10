const express = require('express')
const exphbs  = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');
// const session = require('express-session');
const path = require('path');

const app = express();

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   // cookie: {
//   //     secure: true
//   // }
// }))
app.use(express.static(path.join(__dirname, 'contents')));
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts',
    helpers: {
      section: express_handlebars_sections()
    }
}));
// app.use(express.static("contents"));

app.set('view engine', 'hbs');

//khai báo các thẻ link css và bootstrap-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPCSS='<link rel="stylesheet" href="../css/signup.css">';
const BOOTSTRAP400='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />';
const FONTAWESOME470='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />';
const BOOTSTRAP431='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
const FONTAWESOME5121='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">';
const LOGINCSS='<link rel="stylesheet" href="../css/login.css">';
const STYLE='<link rel="stylesheet" href="../css/style.css">';

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPJS='<script type="text/javascript" src="../js/signup.js"></script>';
const LOGINJS=' <script type="text/javascript" src="../js/login.js"></script>';
const POPPER1129JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
const BOOTSTRAP400JS=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
const POPPER1147JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
const BOOTSTRAP431JS=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
const SWEETALERT2JS=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
const PROMISEPOLYFILLJS='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
const NUMERALJS=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
const TINYMCEJS=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';

app.get('/', function (req, res) {
  res.render('home', {
    bootstrap400:BOOTSTRAP400,
    bootstrap431:BOOTSTRAP431,
    style:STYLE,
    title:"Book Store",
    hasNavbar:true,
  });
});

app.get('/signup', (req, res)=>{
  res.render("vwAccount/signup",{
    title:"Signup",
    signupCss:SIGNUPCSS,
     fontawesome5121:FONTAWESOME5121,
      fontawesome470:FONTAWESOME470,
      signupJs:SIGNUPJS,
      hasNavbar:false,
    });
});

app.get('/login', (req, res)=>{
  res.render("vwAccount/login",
  {
    title:"Login",
    loginCss:LOGINCSS,
    fontawesome470:FONTAWESOME470,
    fontawesome5121:FONTAWESOME5121,
    loginJs:LOGINJS,
    hasNavbar:false,
  });
});

app.listen(3000, () => {
    console.log('Web Server is runing at http://localhost:3000');
});