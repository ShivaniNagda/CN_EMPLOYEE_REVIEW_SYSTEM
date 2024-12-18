const express = require('express'); // requiring expresss
const router = express.Router(); // router
const homeController = require('../controllers/home_controller.js'); // requeiring homeController

console.log(`router is loaded : {200}`);

// It will redirect you to the home page
router.get('/' , homeController.home);

// all the requiest withe the suffix /userr, will require the user file, to compute
router.use('/users' , require('./users.route.js'));
// all the request with the suffix /admin , will require the admin file to compute
router.use('/admin' , require('./admin.route.js'));

// all the request with the suffix /reviews , will require the admin file to compute
router.use('/reviews', require('./reviews.route.js'));

module.exports = router;