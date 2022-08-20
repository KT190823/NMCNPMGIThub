import db from '../models/index'

let createNewUser = async (data) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            await db.User.create({
                username: data.username,
                password: data.password,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                
            })
            console.log(data);

            resolve('create success!')

        }catch(e){
            reject(e);
        }
    })
}

let getAllUser = () =>{
   return new Promise(async (resolve, reject) => {
        try{
            let users = await db.User.findAll({
                raw: true
            });
            resolve(users)

        }catch(e){
            reject(e);
        }
   }) 
}

let getUserInfoById = (userId) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let user = await db.User.findOne({
                where: {id:userId},
                raw: true
            })
            if(user){
                resolve(user)
            }
            else{
                resolve([])
            }
        }catch(e){
            reject(e);
        }
    })
}

let updateUserData = (data) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let userData = await db.User.findOne({
                where: {id: data.id}
            })
            if(userData){
                await userData.update({
                    firstName : data.firstname,
                    lastName : data.lastname,
                    username: data.username,
                    password: data.password,
                    address : data.address,
                    phonenumber : data.phonenumber,
                    gender : data.gender,
                    damage: data.damage,
                    bonus: data.bonus,
                });
                await userData.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }   
            else{
                resolve();
            }
        }catch(e){
            reject(e);
        }
    })
}

let deleteUserById = (id) =>{
    return new Promise(async (resolve, reject) => {
        try{
            let userData = await db.User.findOne({
                where: {id: id}
            })
            if(userData){
                await userData.destroy();
            }
            resolve();
        }catch(e){
            reject(e);
        }
    })
}

let login = (data) =>{
    return new Promise(async (resolve, reject) =>{
        let check = 0;
        try{
            let userData = await db.User.findOne({
                where: {username: data.username}
            })
            if(userData){
                let password = await db.User.findOne({
                    where: {password: data.password}
                })
                if(password){
                    check = 1;
                    resolve(check);
                }
                else{
                    resolve(check);
                }
            }
            else{
                resolve(check);
            }
        }catch(e){
            reject(e);
        }
    })
}

let getUserInfoByUser = (username) =>{
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: {username: username},
                raw:true
            })
            console.log(`user: `,user);
            if(user){
                resolve(user)
            }
            else{
                resolve([])
            }
        }catch(e){
            reject(e)
        }
    }) 
}

module.exports = {
    createNewUser, getAllUser, getUserInfoById, updateUserData, deleteUserById, login, getUserInfoByUser
}