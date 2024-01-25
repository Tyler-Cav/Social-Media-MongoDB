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
    //Get a single user
    async oneUser(req, res) {
        try {
            const getOne = await User.findOne({ _id: req.params.userId })
                .select('-__v')
            res.status(200).json(getOne)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
}