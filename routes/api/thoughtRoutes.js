const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require("../../controllers/thoughtController");

// `GET` to get all thoughts and `POST` to create new thought
router.route('/')
    .get(getThoughts)
    .post(createThought);

// `GET` thought by Id, `PUT` to update thought by Id, and `Delete` to delete by Id
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// this adds a reacation to a thought
router.route('/:thoughtId/reactions')
    .post(addReaction);

// this removes reaction from a thought by Id
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;