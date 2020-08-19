const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from danhmucsp'),
    allById: (catId) => db.load(`select * from sanpham where madanhmuc = ${catId}`),
}