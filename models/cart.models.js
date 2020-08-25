const db=require('../utils/db');
// const { delete, delete } = require('../routes/product.route');

module.exports={
    countCart: async () => {
        const rows = await db.load(`select count(*) as total from giohang`)
        return rows[0].total;
      },
      add: entity => db.add('giohang', entity),
      addCartDetail: entity => db.add('chitietgiohang', entity),
      cartByEmail: email => db.load(`select * from giohang where makh = '${email}'`),
      detailCartById: (cartId, ProId) => db.load(`select * from chitietgiohang where magiohang = "${cartId}" and masp = "${ProId}"`),
      updateCartById: entity => {
        // const condition = {magiohang: entity.magiohang, masp: entity.masp};
        // delete entity.magiohang;
        // delete entity.masp;
        // return db.patch('chitietgiohang', entity, condition);
        return db.insert(`update chitietgiohang set soluong=${entity.soluong} where magiohang = "${entity.magiohang}" and masp = "${entity.masp}"`);
      }
}