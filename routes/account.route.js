const express = require('express');
const accModels = require('../models/account.models');
const linkCss = require('../config/linkCss');
const categoryModel=require('../models/category.models');
const cartModel = require('../models/cart.models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router();

//source logo image
const SrcLogo = '../../image/main/logo.png';

router.get('/signup', (req, res) => {
    res.render("vwAccount/signup", {
      title: "Signup",
      signupCss: linkCss.signupCss,
      fontawesome5121: linkCss.fontawesome5121,
      fontawesome470: linkCss.fontawesome470,
      hasNavbar: false,
      hasFooter: false
    });
  });
  
  router.get('/login', (req, res) => {
    res.render("vwAccount/login",
      {
        title: "Login",
        loginCss: linkCss.loginCss,
        fontawesome470: linkCss.fontawesome470,
        fontawesome5121: linkCss.fontawesome5121,
        hasNavbar: false,
        hasFooter: false
      });
  });

router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let acc = await accModels.getSingleAccount(email);

  if (acc != null) {
    if (bcrypt.compareSync(password, acc.matkhau)) {
      req.session.authUser = acc;
      req.session.isAuthenticated = true;
      if (acc.maloaiuser === "11") req.session.isAdmin = true;

      const url = req.query.retUrl || '/';
      res.redirect(url);
    } else {
      res.render('vwAccount/login', {
        isUnCorrectPassword: true,
        title: "Login",
        loginCss: linkCss.loginCss,
        fontawesome470: linkCss.fontawesome470,
        fontawesome5121: linkCss.fontawesome5121,
        hasNavbar: false,
      })
    }
  } else {
    res.render('vwAccount/login', {
      isInvalid: true,
      title: "Login",
      loginCss: linkCss.loginCss,
      fontawesome470: linkCss.fontawesome470,
      fontawesome5121: linkCss.fontawesome5121,
      hasNavbar: false,
    })
  }
});

router.post('/signup', async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  console.log(req.body);
  //Kiểm tra email đã được dùng để đk tài khoản chưa
  let acc = await accModels.getSingleAccount(email);
  if (acc != null) {
    //Email đã được dùng để tạo tài khoản
    res.render("vwAccount/signup", {
      isInvalidEmail: true,
      title: "Signup",
      signupCss: linkCss.signupCss,
      fontawesome5121: linkCss.fontawesome5121,
      fontawesome470: linkCss.fontawesome470,
      hasNavbar: false,
    })
  } else {
    //Email chưa được dùng trước đó
    let hash = bcrypt.hashSync(password, saltRounds);
    let saveAcc = await accModels.saveInfoAccount(username, email, hash);
    
    //khoi tao gio hang cho khach hang
    const previousId = await cartModel.countCart();
    const cartId = +previousId + 1;
    const entity = {};
    entity.magiohang = cartId;
    entity.makh = email;
    const result1 = cartModel.add(entity);

    console.log(result1);
    res.redirect('/account/login');
    console.log(saveAcc);
  }

})

router.get('/logout', (req, res) => {
  if (true) {
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    req.session.isAdmin = false;

    res.redirect(req.headers.referer);
  }
})


module.exports = router;