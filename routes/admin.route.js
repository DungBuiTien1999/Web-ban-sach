const express = require('express');
const categoryModel = require('../models/category.models');
const linkCss = require('../config/linkCss');
var fs = require('fs');

const router = express.Router();

//multer
var multer = require('multer');
var path = require("path");
var fileName = "";
var imagesFolder = "";
let newPath = "";
var storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    imagesFolder = await taoMaSanPham();
    newPath = path.join(__dirname, '../contents/image/sp/').toString() + imagesFolder;
    fs.mkdirSync(newPath, { recursive: true })
    cb(null, newPath);
  },
  filename: function (req, file, cb) {
    //cb(null, Date.now() + "-" + file.originalname)
    let fileExtension = path.extname(file.originalname).split('.')[1];//lấy phần extention
    fs.readdir(newPath, (err, files) => {
      var newFilename="";
      if(files.length===0)
        newFilename="main";
      else
        newFilename=(files.length).toString();
      cb(null, newFilename + '.' + fileExtension);
    });
  }
});
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(file);
    if (file.mimetype == "image/bmp" || file.mimetype == "image/png"
      || file.mimetype == "image/jpg"
      || file.mimetype == "image/jpeg"
      || file.mimetype == "image/gif"
    ) {
      cb(null, true)
    } else {
      return cb(new Error('Only image are allowed!'))
    }
  }
}).array("bookImages", 10);//.single("bookImages")-->upload 1 file

//source logo image
const SrcLogo = '../../image/main/logo.png';
const uploadBookCss = '<link rel="stylesheet" href="../../css/uploadBook.css">';

router.get('/add-book', async (req, res) => {
  if (req.session.isAuthenticated && req.session.isAdmin) {
    let categories = await categoryModel.all();
    res.render("uploadBook", {
      uploadBookCss,
      fontawesome5121: linkCss.fontawesome5121,
      categories: categories,
      hasNavbar: true,
      hasFooter: true,
      uploadCss: linkCss.uploadWithPreviewCss,
      srcLogo: SrcLogo,
    });
  }
  else {
    res.send("Đăng nhập với tài khoản admin để thực hiện chức năng thêm sách");
  }

});

//mã sản phẩm: số lượng sản phẩm hiện có + 1
async function taoMaSanPham() {
  var proArr = await productModels.countPro();
  var maSanPham = (proArr.length + 1).toString();
  return maSanPham;
}

async function taoTenFile(dir) {
  var name = await fs.readdir(dir, (err, files) => {
    console.log("Số lượng file trong thư muc:" + files.length);
    return (files.length + 1).toString();
  });
  console.log("giá trị của name:" + name);
  // if(name===undefined)
  //   return "main";
  return name;
}

var productModels = require('../models/product.models');
router.post('/add-book', (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.log("A Multer error occurred when uploading.");
      res.json({ "result": 0, "err:": err });
    } else if (err) {
      console.log("An unknown error occurred when uploading." + err);
      res.json({ "result": 0, "err:": err });
    }
    // } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
    //   // Bắt luôn lỗi vượt quá số lượng file cho phép tải lên trong 1 lần
    //   return res.send(`Exceeds the number of files allowed to upload.`);
    // }
    else {
      let maSanPham = await taoMaSanPham();
      console.log("Upload is okay");
      //console.log(req.file.path); // Thông tin file đã upload
      console.log(req.body);
      var sanPham = {
        maSP: maSanPham,
        tenSP: req.body.txtTenSach,
        giaTien: req.body.txtGiaTien,
        maDanhMuc: req.body.selectCategory,
        nhaCungCap: req.body.txtNhaCungCap
      }

      let today = new Date().toISOString().slice(0, 10);
      var chiTietSanPham = {
        maSP: maSanPham,
        mota: req.body.txtMota,
        ngayDang: today,
        tacGia: req.body.txtTacGia,
        nxb: req.body.txtNhaXuatBan,
        nguoiDich: req.body.txtNguoiDich,
        namxb: req.body.txtNamXuatBan,
        hinhThuc: req.body.txtHinhThuc
      }


      await productModels.add("sanpham", sanPham);
      await productModels.add("chitietsanpham", chiTietSanPham);

      var filenames = req.files.map(file => file.filename);
      for (var i = 0; i < filenames.length; i++) {
        //fileName=i.toString();
        var hinhAnhSanPham = {
          maSP: maSanPham,
          path: filenames[i],
        }
        await productModels.add("hinhanhsanpham", hinhAnhSanPham);
        console.log(filenames[i]);
      }
    }
    res.send("Upload thành công");
  });
})

module.exports = router;