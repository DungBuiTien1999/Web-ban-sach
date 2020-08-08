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
app.use(express.static(path.join(__dirname, '/Contents')));
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts',
    helpers: {
      section: express_handlebars_sections()
    }
}));

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('home');
});
 
app.listen(3000, () => {
    console.log('Web Server is runing at http://localhost:3000');
});