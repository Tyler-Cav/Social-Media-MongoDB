const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    oneThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
 } = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId')
 .get(oneThought)
 .put(updateThought)
 .delete(deleteThought)

 //TODO: NEED TO CREATE controller for post and delete for the route below
router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)


module.exports = router;