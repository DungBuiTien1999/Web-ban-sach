const db=require('../utils/db');

module.exports={
    getSingleAccount:async email=>{
        const rows = await db.load(`select * from user where email='${email}'`);
        if(rows.length === 0)
            return null;
        return rows[0];
    },
    saveInfoAccount:(username, email, password)=>{
        let sql=`insert into user(email, username, matkhau, maloaiuser) values('${email}', '${username}', '${password}','00')`;
        return db.insert(sql);
    }
}