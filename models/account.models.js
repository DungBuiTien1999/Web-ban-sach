const db=require('../utils/db');

module.exports={
    getSingleAccount:(email)=>{
        return db.load(`select * from user where email='${email}'`);
    },
    saveInfoAccount:(username, email, password)=>{
        let sql=`insert into user(email, username, matkhau, maloaiuser) values('${email}', '${username}', '${password}','00')`;
        return db.insert(sql);
    }
}