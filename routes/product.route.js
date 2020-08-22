const express = require('express');
const productModel = require("../models/product.models");
const router = express.Router();

//khai báo các thẻ link css và bootstrap-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPCSS='<link rel="stylesheet" href="../css/signup.css">';
const BOOTSTRAP400='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />';
const FONTAWESOME470='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />';
const BOOTSTRAP431='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">';
const FONTAWESOME5121='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">';
const LOGINCSS=' <link rel="stylesheet" href="../css/login.css">';
const MAINCSS = '<link rel="stylesheet" href="../../css/main.css">';
const LISTPROTOTYPECSS = '<link rel="stylesheet" href="../../css/listprototype.css">';
const DETAILPRODUCTCSS = '<link rel="stylesheet" href="../../css/detailproduct.css">';
const HOMECSS ='<link rel="stylesheet" href="../../css/home.css">';

//Khai báo các liên kết js-View nào dùng thì gửi kèm ra cho view đó
const SIGNUPJS='<script type="text/javascript" src="../js/signup.js"></script>';
const LOGINJS=' <script type="text/javascript" src="../js/login.js"></script>';
const HOMEJS = ' <script type="text/javascript" src="../js/home.js"></script>';
const DETAILPRODUCTJS = ' <script type="text/javascript" src="../../js/detailproduct.js"></script>';
const BOOTSTRAPJQUERY321JS = '<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>';
const POPPER1129JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
const BOOTSTRAP400JS=' <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
const POPPER1147JS='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>';
const BOOTSTRAP431JS=' <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>';
const SWEETALERT2JS=' <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>';
const PROMISEPOLYFILLJS='<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>';
const NUMERALJS=' <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>';
const TINYMCEJS=' <script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=ezd73nxbzc7bu6e86g2l82jbbffke0mwevwrnyvc5q8h89j6"></script>';

//source logo image
const SrcLogo = '../../image/main/logo.png';

router.get('/:id', async (req, res) => {

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
    
    // try {
      const Pro = await productModel.proById(req.params.id);
      const detailPro = await productModel.detailProById(req.params.id);
      const imgPro = await productModel.imgProById(req.params.id);
      res.render('prototype/detailproduct.hbs',{
        bootstrap400:BOOTSTRAP400,
        bootstrap431:BOOTSTRAP431,
        fontawesome470:FONTAWESOME470,
        bootstrap431: BOOTSTRAP431,
        maincss: MAINCSS,
        homecss: HOMECSS,
        detailproductcss: DETAILPRODUCTCSS,
        bootstrapjquery321Js: BOOTSTRAPJQUERY321JS,
        popper1129Js: POPPER1129JS,
        bootstrap400Js: BOOTSTRAP400JS,
        detailproductJs: DETAILPRODUCTJS,
        hasNavbar: true,
        hasFooter: true,
        title:"Book Store",
        product: Pro[0],
        detailpro: detailPro[0],
        imgpro: imgPro,
        srcLogo: SrcLogo,
        topTimeEnd: TopTimeEnd,
        topValue: TopValue
    });

    // } catch (err) {
    //   console.log(err);
    //   res.end('View error log in console.');
    // }
    
})

module.exports = router;