const express = require('express');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');

const session = require('express-session');
const path = require('path');
const numeral = require('numeral');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('express-async-errors');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //     secure: true
  // }
}))

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

const linkCss = require('./config/linkCss');

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
// const POPPER1129JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
// const BOOTSTRAP400JS=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
// const POPPER1147JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
// const BOOTSTRAP431JS=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
// const SWEETALERT2JS=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
// const PROMISEPOLYFILLJS='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
// const NUMERALJS=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
// const TINYMCEJS=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';

const HOMEJS = ' <script type="text/javascript" src="../js/home.js"></script>';
const POPPER1129JS = '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
const BOOTSTRAP400JS = ' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
const POPPER1147JS = '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
const BOOTSTRAP431JS = ' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
const SWEETALERT2JS = ' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
const PROMISEPOLYFILLJS = '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
const NUMERALJS = ' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
const TINYMCEJS = ' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';
const BOOTSTRAPJQUERY321JS = '<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>';
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

// var username = "Login";
// var didLogin = false;
// var isAdmin = false;

app.get('/', function (req, res) {
  res.render('home', {
    homecss: linkCss.homeCss,
    bootstrapjquery321Js: BOOTSTRAPJQUERY321JS,
    popper1129Js: POPPER1129JS,
    bootstrap400Js: BOOTSTRAP400JS,
    homejs: HOMEJS,
    hasNavbar: true,
    hasFooter: true,
    title: "Book Store",
    topTimeEnd: TopTimeEnd,
    topValue: TopValue,
    srcLogo: SrcLogo,
  });
});

// app.get('/signup', (req, res) => {
//   res.render("vwAccount/signup", {
//     title: "Signup",
//     signupCss: linkCss.signupCss,
//     fontawesome5121: linkCss.fontawesome5121,
//     fontawesome470: linkCss.fontawesome470,
//     hasNavbar: false,
//     hasFooter: false
//   });
// });

// app.get('/login', (req, res) => {
//   res.render("vwAccount/login",
//     {
//       title: "Login",
//       loginCss: linkCss.loginCss,
//       fontawesome470: linkCss.fontawesome470,
//       fontawesome5121: linkCss.fontawesome5121,
//       hasNavbar: false,
//       hasFooter: false
//     });
// });


// const categoryModel=require('./models/category.models');
// app.get('/admin/add-book', async(req, res) => {
//   if (didLogin && isAdmin) {
//     let categories=await categoryModel.all();
//     res.render("uploadBook", {
//       uploadBookCss: linkCss.uploadBookCss,
//       fontawesome5121: linkCss.fontawesome5121,
//       categories: categories,
//       hasNavbar: true,
//       hasFooter: true,
//       uploadCss: linkCss.uploadWithPreviewCss,
//       srcLogo: SrcLogo,
//       didLogin,
//       username,
//       isAdmin,
//     });
//   }
//   else {
//     res.send("Đăng nhập với tài khoản admin để thực hiện chức năng thêm sách");
//   }

// });
// const accModels = require('./models/account.models');

// app.post('/login', async (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   let acc = await accModels.getSingleAccount(email);

//   if (Object.keys(acc).length > 0) {
//     console.log(acc[0].username);
//     if (bcrypt.compareSync(password, acc[0].matkhau)) {
//       username = acc[0].username;
//       didLogin = true;
//       if (acc[0].maloaiuser === "11") isAdmin = true;

//       //
//       res.redirect('/');
//     } else {
//       res.render('vwAccount/login', {
//         isUnCorrectPassword: true,
//         title: "Login",
//         loginCss: linkCss.loginCss,
//         fontawesome470: linkCss.fontawesome470,
//         fontawesome5121: linkCss.fontawesome5121,
//         hasNavbar: false,
//       })
//     }
//   } else {
//     res.render('vwAccount/login', {
//       isInvalid: true,
//       title: "Login",
//       loginCss: linkCss.loginCss,
//       fontawesome470: linkCss.fontawesome470,
//       fontawesome5121: linkCss.fontawesome5121,
//       hasNavbar: false,
//     })
//   }
// });


// app.post('/signup', async (req, res) => {
//   let email = req.body.email;
//   let username = req.body.username;
//   let password = req.body.password;

//   //Kiểm tra email đã được dùng để đk tài khoản chưa
//   let acc = await accModels.getSingleAccount(email);
//   if (Object.keys(acc).length > 0) {
//     //Email đã được dùng để tạo tài khoản
//     res.render("vwAccount/signup", {
//       isInvalidEmail: true,
//       title: "Signup",
//       signupCss: linkCss.signupCss,
//       fontawesome5121: linkCss.fontawesome5121,
//       fontawesome470: linkCss.fontawesome470,
//       hasNavbar: false,
//     })
//   } else {
//     //Email chưa được dùng trước đó
//     let hash = bcrypt.hashSync(password, saltRounds);
//     let saveAcc = await accModels.saveInfoAccount(username, email, hash);
//     res.redirect('/login');
//     console.log(saveAcc);
//   }

// })

// app.get('/logout', (req, res) => {
//   if (didLogin) {
//     didLogin = false;
//     username = "Log in";
//     isAdmin = false;

//     res.redirect('/');
//   }
// })

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