const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    oneThought,
    updateThought,
    deleteThought,
 } = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId')
 .get(oneThought)
 .put(updateThought)
 .delete(deleteThought)

 //TODO: NEED TO CREATE controller for post and delete for the route below
router.route('/:thoughtID/reactions')
.post()
.delete()


module.exports = router;