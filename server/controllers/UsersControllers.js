const axios = require("axios")

class UsersControllers {
    static async apiGetUsers(req, res, next) {
        try {
            const response = await axios.get("https://fullstack-project-b2bed-default-rtdb.firebaseio.com/users.json")
            res.status(200).json(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    static async apiCreateUser(req, res, next) {
        try {
            const user = { name: req.body.name, age: req.body.age }
            const response = await axios.post("https://fullstack-project-b2bed-default-rtdb.firebaseio.com/users.json", user)
            res.status(200).json(response.data.name) // id firebase
        } catch(error) {
            console.log(error)
        }
    }

    static async apiGetUser(req, res, next) {
        try {
            const response = await axios.get(`https://fullstack-project-b2bed-default-rtdb.firebaseio.com/users/${req.params.id}.json`)
            res.status(200).json(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    static async apiUpdateUser(req, res, next) {
        try {
            const updatedUser = {name: req.body.name, age: req.body.age}
            const response = await axios.put(`https://fullstack-project-b2bed-default-rtdb.firebaseio.com/users/${req.params.id}.json`, updatedUser)
            res.status(200).json(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    static async apiDeleteUser(req, res, next) {
        try {
            const response = await axios.delete(`https://fullstack-project-b2bed-default-rtdb.firebaseio.com/users/${req.params.id}.json`)
            res.status(200).json({success: true})
        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = UsersControllers

