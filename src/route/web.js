import express  from "express";
import homeController from '../controllers/homeController'; 

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homeController.getLogin);
    router.post('/login', homeController.postLogin);

    router.get('/register', homeController.getRegister);
    router.post('/post-register', homeController.postRegister);

    router.get('/homepage', homeController.getHomePage);

    router.get('/create', homeController.getCreate);
    router.post('/post-user', homeController.postCreate);
    

    router.get('/detail-user', homeController.detailUser);
    router.get('/edit-user', homeController.editUser);
    router.post('/put-user', homeController.updateUser);
    router.get('/delete-user', homeController.deleteUser);

    router.get('/salary-user', homeController.salaryUser);

    return app.use("/", router);
}

export default initWebRoutes;