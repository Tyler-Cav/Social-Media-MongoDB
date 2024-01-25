const router = require('express').Router();
const { 
    getUser,
    createUser,
    oneUser,
 } = require('../../controllers/userController')

router.route('/').get(getUser).post(createUser)

router.route('/:userId')
 .get(oneUser)

module.exports = router;