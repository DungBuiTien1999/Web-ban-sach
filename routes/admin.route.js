const express = require('express');
const categoryModel = require('../models/category.models');
const linkCss = require('../config/linkCss');

const router = express.Router();

//source logo image
const SrcLogo = '../../image/main/logo.png';
const uploadBookCss = '<link rel="stylesheet" href="../../css/uploadBook.css">';

router.get('/add-book', async(req, res) => {
    if (req.session.isAuthenticated && req.session.isAdmin) {
      let categories=await categoryModel.all();
      res.render("uploadBook", {
        uploadBookCss,
        fontawesome5121: linkCss.fontawesome5121,
        categories: categories,
        hasNavbar: true,
        hasFooter: true,
        uploadCss: linkCss.uploadWithPreviewCss,
        srcLogo: SrcLogo
      });
    }
    else {
      res.send("Đăng nhập với tài khoản admin để thực hiện chức năng thêm sách");
    }
  
  });

module.exports = router;