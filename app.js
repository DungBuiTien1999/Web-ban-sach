const express = require('express');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');

// const session = require('express-session');
const path = require('path');
const numeral = require('numeral');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   // cookie: {
//   //     secure: true
//   // }
// }))
app.use(express.static(path.join(__dirname, '/Contents')));
app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir: 'views/_layouts',
  helpers: {
    section: express_handlebars_sections(),
    format: val => numeral(val).format('0,0')
  }
}));

// app.use(express.static("Contents"));

app.set('view engine', 'hbs');
//khai báo các thẻ link css và bootstrap-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPCSS = '<link rel="stylesheet" href="../css/signup.css">';
const BOOTSTRAP400 = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />';
const FONTAWESOME470 = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />';
const BOOTSTRAP431 = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
const FONTAWESOME5121 = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">';
const LOGINCSS = ' <link rel="stylesheet" href="../css/login.css">';
const MAINCSS = '<link rel="stylesheet" href="../css/main.css">';
const HOMECSS = '<link rel="stylesheet" href="../css/home.css">';
const UPLOADBOOKCSS = '<link rel="stylesheet" href="../css/uploadBook.css">';

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
// const POPPER1129JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
// const BOOTSTRAP400JS=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
// const POPPER1147JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
// const BOOTSTRAP431JS=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
// const SWEETALERT2JS=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
// const PROMISEPOLYFILLJS='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
// const NUMERALJS=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
// const TINYMCEJS=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';

//source logo image
const SrcLogo = '../image/main/logo.png';

const TopTimeEnd = [
  {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Successfully', Price: '100000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Failure', Price: '200000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Fall in love', Price: '500000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }];

const TopValue = [
  {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Successfully', Price: '100000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Failure', Price: '200000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Fall in love', Price: '500000'
  }, {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }];

require('./middlewares/locals.mdw')(app);
require('./middlewares/route.mdw')(app);

app.get('/', function (req, res) {
  res.render('home', {
    bootstrap400:BOOTSTRAP400,
     bootstrap431:BOOTSTRAP431,
     fontawesome470:FONTAWESOME470,
     bootstrap431: BOOTSTRAP431,
     maincss: MAINCSS,
     homecss: HOMECSS,
     bootstrapjquery321Js: BOOTSTRAPJQUERY321JS,
     popper1129Js: POPPER1129JS,
     bootstrap400Js: BOOTSTRAP400JS,
     homejs: HOMEJS,
     hasNavbar: true,
     hasFooter: true,
    title:"Book Store",
    topTimeEnd: TopTimeEnd,
    topValue: TopValue,
    srcLogo: SrcLogo
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
      hasFooter: false
    });
});

app.get('/login', (req, res) => {
  res.render("vwAccount/login",
  {
    title:"Login",
    loginCss:LOGINCSS,
    fontawesome470:FONTAWESOME470,
    fontawesome5121:FONTAWESOME5121,
    loginJs:LOGINJS,
    hasNavbar:false,
    hasFooter: false
  });
});

app.use((req, res, next) => {
  res.send('you\'re lost');
})

//default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send("view error on sonsole.");
})

app.listen(3000, () => {
  console.log('Web Server is runing at http://localhost:3000');
});

const UPLOADWITHPREVIEWCSS = '<link rel="stylesheet" type="text/css" href="https://unpkg.com/file-upload-with-preview@4.0.2/dist/file-upload-with-preview.min.css">';

app.get('/uploadBook', (req, res) => {
  res.render("uploadBook", {
    uploadBookCss: UPLOADBOOKCSS,
    fontawesome470: FONTAWESOME470,
    fontawesome5121: FONTAWESOME5121,
    categories: Categories,
    uploadCss: UPLOADWITHPREVIEWCSS,
  });
});
const accModels = require('./models/account.models');

app.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let acc = await accModels.getSingleAccount(email);

  if (Object.keys(acc).length > 0) {
    console.log(acc[0]);
    if (bcrypt.compareSync(password, acc[0].matkhau)) {
      res.redirect('/', 200, {
        infoAccount: acc[0],
      });
    } else {
      res.render('vwAccount/login', {
        isUnCorrectPassword: true,
        title: "Login",
        loginCss: LOGINCSS,
        fontawesome470: FONTAWESOME470,
        fontawesome5121: FONTAWESOME5121,
        hasNavbar: false,
      })
    }
  } else {
    res.render('vwAccount/login', {
      isInvalid: true,
      title: "Login",
      loginCss: LOGINCSS,
      fontawesome470: FONTAWESOME470,
      fontawesome5121: FONTAWESOME5121,
      hasNavbar: false,
    })
  }
});


app.post('/signup', async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  //Kiểm tra email đã được dùng để đk tài khoản chưa
  let acc = await accModels.getSingleAccount(email);
  if (Object.keys(acc).length > 0) {
    //Email đã được dùng để tạo tài khoản
    res.render("vwAccount/signup", {
      isInvalidEmail: true,
      title: "Signup",
      signupCss: SIGNUPCSS,
      fontawesome5121: FONTAWESOME5121,
      fontawesome470: FONTAWESOME470,
      hasNavbar: false,
    })
  } else {
    //Email chưa được dùng trước đó
    let hash = bcrypt.hashSync(password, saltRounds);
    let saveAcc = await accModels.saveInfoAccount(username, email, hash);
    res.redirect('/login');
    console.log(saveAcc);
  }
  
})