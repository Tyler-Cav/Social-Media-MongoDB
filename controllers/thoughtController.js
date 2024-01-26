const { Thought, User } = require('../models')

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.error(err)
            res.status(500).json(err);
        }
    },
    // Get a single thought
    async oneThought(req, res) {
        try {
            const oneThought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v')
            res.status(200).json(oneThought)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
    //Create a new thought
    async createThought(req, res) {
        try {
            const thoughtCreate = await Thought.create(req.body);
            const addUserThought = await User.findOneAndUpdate(
                {_id: req.body.userId }, 
                {$addToSet: {thoughts: thoughtCreate._id} },
                { new: true },
            )

            res.json(thoughtCreate);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //Update a thought
    async updateThought(req, res) {
        try {
            const updateThought = await Thought.updateOne(req.body);
            res.json(updateThought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },
    //Delete Thought
    async deleteThought(req, res) {
        try {
            const deleteThought = await Thought.deleteOne({_id: req.params.thoughtId})
            res.status(200).json(deleteThought)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    }
}
