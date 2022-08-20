import CRUDService from '../services/CRUDService'

let getLogin = (req, res) =>{
    return res.render('login.ejs')
}

let postLogin =  async (req, res) =>{
    let check = await CRUDService.login(req.body);
    if(check === 1 && req.body.username === 'admin'){
        let data = await CRUDService.getAllUser();
        return res.render('homePage.ejs', {
            dataTable: data 
        });
    }
    else if(check === 1){
        let username = req.body.username;
        if(username){
            let userData = await CRUDService.getUserInfoByUser(username);
            return res.render('displayNV.ejs',{
                user: userData
            });
        }
        else {
            return res.send('User not found!');
        }
    }
    else{
        return res.send('login fail');
    }

}

let getRegister = (req, res) =>{
    return res.render('register.ejs')
}

let getHomePage = async (req, res) =>{
    try {
        let data = await CRUDService.getAllUser();
        return res.render('homePage.ejs', {
            dataTable: data 
        });
    }
    catch (error){
        console.log(error);
    }
}

let getCreate = (req, res) => {
    return res.render('createNV.ejs')
}

let postCreate = async (req, res) =>{
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    
    return res.render('created.ejs');
}

let detailUser = async (req, res) =>{
    let userId = req.query.id;
    console.log(userId);
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('detailNV.ejs',{
            user: userData
        });
    }
    else {
        return res.send('User not found!');
    }
}

let editUser = async (req, res) =>{
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render('editNV.ejs',{
            user: userData
        });
    }
    else {
        return res.send('User not found!');
    }
}

let updateUser = async (req, res) =>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('homePage.ejs', {
        dataTable: allUsers
    });
}

let deleteUser = async (req, res) =>{
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserById(id);

        return res.render('delete.ejs');
    }
    else {
        return res.send('User not found!');
    }
}

let postRegister = async (req, res) =>{
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    
    return res.render('registered.ejs');
}

let salaryUser = async (req, res) => {
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('displayNVSalary.ejs',{
            user: userData
        });
    }
    else {
        return res.send('User not found!');
    }
}

module.exports = {
    getLogin, postLogin, getHomePage, getCreate, postCreate, detailUser, editUser, updateUser, deleteUser, getRegister, postRegister, salaryUser
}