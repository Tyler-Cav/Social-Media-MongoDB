const router = require('express').Router();
const { 
    getUser,
    createUser,
    oneUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
 } = require('../../controllers/userController')

router.route('/').get(getUser).post(createUser)

router.route('/:userId')
.get(oneUser)
.put(updateUser)
.delete(deleteUser)

router.route('/:userId/friends/:friendId')
.put(addFriend)
.delete(removeFriend)

module.exports = router;