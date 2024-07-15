const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// `GET` to get all users and `POST` to create new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// `GET` user by Id, `PUT` to update user by Id, and `Delete` to delete by Id
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Users can add friends or delete friends from friends list
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
