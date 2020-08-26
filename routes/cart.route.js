const express = require('express');
const linkCss = require('../config/linkCss');
const cartModels = require('../models/cart.models');
const productModels = require('../models/product.models');
const router = express.Router();

const SrcLogo = '../../image/main/logo.png';
router.get('', async (req, res) => {
    var chiTietGioHang;
    var cartInfoArr=[];
    if (req.session.authUser != undefined) {
        const email = req.session.authUser.email;
        var gioHang = await cartModels.cartByEmail(email);
        var maGioHang = gioHang[0].magiohang;
        chiTietGioHang = await cartModels.detailCart(maGioHang);//Trả về một mảng gồm: mã sp và số lượng
       
        if (chiTietGioHang.length > 0) {
            req.session.isEmptyCart=false;
            let sp;
            for (var i = 0; i < chiTietGioHang.length; i++) {
                var cartInfo={};
                sp=await productModels.proById(chiTietGioHang[i].masp);

                cartInfo.masp=sp[0].masp;
                cartInfo.tensp=sp[0].tensp;
                cartInfo.giatien=sp[0].giatien;
                cartInfo.soluong=chiTietGioHang[i].soluong;
                cartInfo.path="";
                cartInfoArr.push(cartInfo);
            }
            console.log(cartInfoArr);
        }
        else req.session.isEmptyCart=true;
    }
    else req.session.isEmptyCart=true;
    console.log(req.session);
    res.render('cart', {
        cartCss: linkCss.cartCss,
        hasNavbar: true,
        hasFooter: true,
        srcLogo: SrcLogo,
        cartInfoArr,
    });
})

module.exports = router;