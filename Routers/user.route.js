const express = require('express');
const router =express.Router();

const { getAllUsers, createUser, getOneUser, updatedUser, deleteUser } = require('../Controllers/user.controller');


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post('/',createUser);
router.patch('/:id',updatedUser);
router.delete('/:id',deleteUser);

module.exports = router;