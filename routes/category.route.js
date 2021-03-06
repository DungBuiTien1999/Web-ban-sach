const express = require('express');
const categoryModel = require('../models/category.models');
const config = require('../config/default.json');
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
const HOMECSS ='<link rel="stylesheet" href="../css/home.css">';

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

//source logo image
const SrcLogo = '../../image/main/logo.png';

router.get('/:id', async (req, res) => {
    
      // for(const c of res.locals.lcCategories){
      //   if(c.madanhmuc == req.params.id){
      //     c.isActive = true;
      //   }
      // }

    const catId = req.params.id;
    const limit = config.paginate.limit;

    const page = req.query.page || 1;
    if (page < 1) page = 1;
    const offset = (page - 1) * config.paginate.limit;

    const [total, rows] = await Promise.all([
      categoryModel.countByCat(catId),
      categoryModel.pageByCat(catId, offset)
    ]);

    // const total = await productModel.countByCat(catId);
    let nPages = Math.floor(total / limit);
    if (total % limit > 0) nPages++;
    const page_numbers = [];
    for (i = 1; i <= nPages; i++) {
      page_numbers.push({
        value: i,
        isCurrentPage: i === +page
      })
    }

    const prev_value = page == 1 ? 1 : +page - 1;
    const next_value = page == nPages ? nPages : +page + 1;
      res.render('prototype/listprototype.hbs',{
        bootstrap400:BOOTSTRAP400,
        bootstrap431:BOOTSTRAP431,
        fontawesome470:FONTAWESOME470,
        bootstrap431: BOOTSTRAP431,
        maincss: MAINCSS,
        listprototypecss: LISTPROTOTYPECSS,
        homecss: HOMECSS,
        homejs: HOMEJS,
        hasNavbar: true,
        hasFooter: true,
        title:"Book Store",
        empty: rows.length === 0,
        products: rows,
        namelist: 'handmake',
        srcLogo: SrcLogo,
        page_numbers, prev_value, next_value,
    });

})

module.exports = router;