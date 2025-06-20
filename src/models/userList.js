let conn = require("../../db.js")

exports.addUser = (...userData)=>{
    return new Promise((resolve, reject)=>{
        conn.query("insert into users values('0', ?, ?, ?, ?, ?, ?, ?, ?)", [...userData], (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}


exports.fetchAllUsers = ()=>{
    return new Promise((resolve, reject)=>{
        conn.query("select id, firstName, lastName, email, phone from users", [], (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}

exports.searchUser = (id)=>{
    return new Promise((resolve, reject)=>{
        conn.query("select * from users where id=?", [id], (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}

exports.deleteuser = (id)=>{
    return new Promise((resolve, reject)=>{
        conn.query("delete from users where id=?", [id], (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}

exports.updateuser = (id, firstName, lastName, birth, address, education, hobbies, email, phone)=>{
    return new Promise((resolve, reject)=>{
        conn.query("update users set firstName=?, lastName=?, birth=?, address=?, education=?, hobbies=?, email=?, phone=? where id = ?", [firstName, lastName, birth, address, education, hobbies, email, phone, id], (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}