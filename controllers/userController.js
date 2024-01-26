const { Thought, User } = require('../models')

module.exports = {
    // Get all users
    async getUser(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (err) {
            console.error(err)
            res.status(500).json(err);
        }
    },
    //Get a single user
    async oneUser(req, res) {
        try {
            const getOne = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('friends')
                .populate('thoughts')
                
            res.status(200).json(getOne)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
    //Create a new user
    async createUser(req, res) {
        try {
            const createUser = await User.create(req.body);
            //TODO: NEED TO  push the created thought's _id 
            //TODO: to the associated user's thoughts array field)
            res.json(createUser);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Add a friend for a user
    async addFriend(req, res) {
        try {
            const addFriend = await User.updateOne(
                {_id: req.params.userId }, 
                {$addToSet: {friends: req.params.friendId} }
            )
            
             res.json(addFriend)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //remove a friend
    async removeFriend(req, res) {
        try {
            const removeFriend = await User.updateOne(
                {_id: req.params.userId }, 
                {$pull: {friends: req.params.friendId} }
            )
             res.json(removeFriend)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Update a user
    async updateUser(req, res) {
        try {
            const updateUser = await User.updateOne(req.body);
            res.json(updateUser);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
    //Delete User
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.deleteOne({ _id: req.params.userId })
            res.status(200).json(deleteUser)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    }
}