const express = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const router = express.Router()

router
    .route("/")
        .get(UsersControllers.apiGetUsers)
        .post(UsersControllers.apiCreateUser)

router
    .route("/:id")
        .get(UsersControllers.apiGetUser)
        .put(UsersControllers.apiUpdateUser)
        .delete(UsersControllers.apiDeleteUser)

module.exports = router

