const express = require("express");
const router = express.Router();
const controllerPost = require("./../controllers/controllerPosts");

// index
router.get(`/`, controllerPost.index);

//Show
router.get(`/:id`, controllerPost.show);

//Store
router.post(`/`, controllerPost.create);

//Update
router.put(`/:id`, controllerPost.update);

//modify
router.patch(`/:id`, controllerPost.patch);

//Destroy
router.delete(`/:id`, controllerPost.destroy);

module.exports = router;
