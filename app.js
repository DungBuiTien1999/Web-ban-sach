const express = require('express');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');

const session = require('express-session');
const path = require('path');
const numeral = require('numeral');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('express-async-errors');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
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

<<<<<<< HEAD
=======
app.get('/cart', (req, res) => {
  res.render('cart', {
    isEmptyCart: true,
    cartCss: linkCss.cartCss,
    hasNavbar: true,
    hasFooter: true,
    srcLogo: SrcLogo,
  });
})

>>>>>>> c160ccbec1c75f8a377ce8912dcd253bcf5edfeb
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