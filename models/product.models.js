const db = require('../utils/db');

module.exports = {
    proById: proId => db.load(`select * from sanpham where masp = ${proId}`),
    detailProById: proId => db.load(`select * from chitietsanpham where masp = ${proId}`),
    imgProById: proId => db.load(`select * from hinhanhsanpham where masp = ${proId}`),
    add: (table,entity)=>db.add(table,entity),
    countPro:()=>db.load('select masp from sanpham'),
    countImg:(proId)=>db.load(`select* from hinhanhsanpham where masp=${proId}`)
}