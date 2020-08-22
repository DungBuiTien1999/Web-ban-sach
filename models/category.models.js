const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: () => db.load('select * from danhmucsp'),
    allById: catId => db.load(`select * from sanpham where madanhmuc = ${catId}`),
    countByCat: async catId => {
        const rows = await db.load(`select count(*) as total from sanpham where madanhmuc = ${catId}`)
        return rows[0].total;
      },
    pageByCat: (catId, offset) => db.load(`select * from sanpham where madanhmuc = ${catId} limit ${config.paginate.limit} offset ${offset}`),
}