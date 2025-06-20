let userdb = require("../models/userList.js");

exports.userList = (req, res)=>{
    let promise = userdb.fetchAllUsers();
    promise.then((result)=>{
        res.render("users.ejs", {users : result});
    }).catch((err)=>{
        res.send("Failed to add user"+err);
    });
};

exports.addUser = (req, res)=>{
    res.render("adduser.ejs", {msg : ""});
}

exports.newUser = (req, res)=>{
    let { firstName, lastName, birth, address, education, hobbies, email, phone} = req.body;
    let promise = userdb.addUser(firstName, lastName, birth, address, education, hobbies, email, phone);
    let users = userdb.fetchAllUsers();
    promise.then((result)=>{
        users.then((r)=>{
            res.render("addUser.ejs", {msg : result});   
        }).catch((err)=>{
            res.send("Failed to add user"+err);
        });   
    }).catch((err)=>{
        res.send("Failed to add user"+err);
    });
}

exports.seeUser = (req, res)=>{
    let id = req.query.id;
    let user = userdb.searchUser(id);
    user.then((result)=>{
        console.log(result);
        res.render("userprofile.ejs", {user : result[0]});   
    }).catch((err)=>{
        res.send("Failed to add user"+err);
    }); 
}

exports.deleteuser = (req, res)=>{
    let id = req.query.id;
    let user = userdb.deleteuser(id);
    let promise = userdb.fetchAllUsers();
    user.then((result)=>{
        promise.then((r)=>{
            res.render("users.ejs", {users : r});   
        }).catch((err)=>{
            res.send("Failed to fetch users"+err);
        });   
    }).catch((err)=>{
        res.send("Failed to delete user"+err);
    });
}

exports.updateuser = (req, res)=>{
    let { id, firstName, lastName, birth, address, education, hobbies, email, phone} = req.body;
    let user = userdb.updateuser(id, firstName, lastName, birth, address, education, hobbies, email, phone);
    let promise = userdb.fetchAllUsers();
    user.then((result)=>{
        promise.then((r)=>{
            res.render("users.ejs", {users : r});   
        }).catch((err)=>{
            res.send("Failed to fetch users"+err);
        });   
    }).catch((err)=>{
        res.send("Failed to update user"+err);
    });
}

exports.searchEmail =(req, res)=>{
    let email = req.query.e;
    let user = userdb.searchEmail(email);
    user.then((result)=>{
        if(result.length > 0){
            res.send(true);
        }else{
            res.send(false);
        }
    }).catch((err)=>{
        res.send("Failed to update user"+err);
    });
};

exports.searchName = (req, res)=>{
    let name = req.query.n;
    let user = userdb.searchName(name);
    user.then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send("Failed to update user"+err);
    });
};

exports.birthDay = (req, res)=>{
    let user = userdb.fetchAllUsersBirth();
    user.then((result)=>{
        res.render("birthday.ejs", {users : result});
    }).catch((err)=>{
        res.send("Failed to update user"+err);
    });
};