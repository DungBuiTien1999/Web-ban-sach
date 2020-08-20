const express = require('express');
const exphbs  = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');
//const FileUploadWithPreview = require('file-upload-with-preview');
// const session = require('express-session');
const path = require('path');
const numeral = require('numeral');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   // cookie: {
//   //     secure: true
//   // }
// }))
// app.use(express.static(path.join(__dirname, '/Contents')));
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts',
    helpers: {
      section: express_handlebars_sections(),
      format: val => numeral(val).format('0,0')
    }
}));



app.use(express.static("Contents"));

require('./middlewares/route.mdw')(app);

app.set('view engine', 'hbs');

//khai báo các thẻ link css và bootstrap-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPCSS='<link rel="stylesheet" href="../css/signup.css">';
const BOOTSTRAP400='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />';
const FONTAWESOME470='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />';
const BOOTSTRAP431='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
const FONTAWESOME5121='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">';
const LOGINCSS=' <link rel="stylesheet" href="../css/login.css">';
const MAINCSS = '<link rel="stylesheet" href="../css/main.css">';
const HOMECSS ='<link rel="stylesheet" href="../css/home.css">';
const UPLOADBOOKCSS='<link rel="stylesheet" href="../css/uploadBook.css">';

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPJS='<script type="text/javascript" src="../js/signup.js"></script>';
const LOGINJS=' <script type="text/javascript" src="../js/login.js"></script>';
const HOMEJS = ' <script type="text/javascript" src="../js/home.js"></script>';
const POPPER1129JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
const BOOTSTRAP400JS=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
const POPPER1147JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
const BOOTSTRAP431JS=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
const SWEETALERT2JS=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
const PROMISEPOLYFILLJS='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
const NUMERALJS=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
const TINYMCEJS=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';
const UPLOADBOOKJS='<script type="text/javascript" src="../js/uploadBook.js"></script>';

const TopTimeEnd = [
  {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Successfully', Price: '100000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Failure', Price: '200000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Fall in love', Price: '500000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }];

const TopValue = [
  {
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Successfully', Price: '100000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Failure', Price: '200000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Fall in love', Price: '500000'
  },{
    ProID: '01', imgURL: 'book-hor-4.jpg', ProName: 'Hello world', Price: '300000'
  }];

const Categories = [
  {ItemID: '01', ItemName: 'Tiểu thuyết', isActive: false},
  {ItemID: '02', ItemName: 'Truyện tranh', isActive: false},
  {ItemID: '03', ItemName: 'Lịch sử', isActive: false},
  {ItemID: '04', ItemName: 'Văn hóa', isActive: true},
  {ItemID: '05', ItemName: 'Trinh thám', isActive: false},
  {ItemID: '06', ItemName: 'Ngụ ngôn', isActive: false}
]

app.get('/', function (req, res) {
  res.render('home', {
    bootstrap400:BOOTSTRAP400,
     bootstrap431:BOOTSTRAP431,
     fontawesome470:FONTAWESOME470,
     bootstrap431: BOOTSTRAP431,
     maincss: MAINCSS,
     homecss: HOMECSS,
     homejs: HOMEJS,
     hasNavbar: true,
     hasFooter: true,
    title:"Book Store",
    topTimeEnd: TopTimeEnd,
    topValue: TopValue,
    lcCategories: Categories
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

// initialize a new FileUploadWithPreview object
//const upload = new FileUploadWithPreview('myUniqueUploadId');
const UPLOADWITHPREVIEWCSS='<link rel="stylesheet" type="text/css" href="https://unpkg.com/file-upload-with-preview@4.0.2/dist/file-upload-with-preview.min.css">';
//upload.cachedFileArray;
//upload.emulateInputSelection() // to open image browser
//upload.clearPreviewPanel() // clear all selected images
app.get('/uploadBook',(req,res)=>{
  res.render("uploadBook",{
    category:["truyện tranh", "trinh thám"],
    uploadBookCss:UPLOADBOOKCSS,
    fontawesome470:FONTAWESOME470,
    fontawesome5121:FONTAWESOME5121,
    uploadBookJs:UPLOADBOOKJS,
    categories:Categories,
    uploadCss:UPLOADWITHPREVIEWCSS,
  });
 
});