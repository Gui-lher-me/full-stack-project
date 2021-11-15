const express = require("express")
const dotenv = require("dotenv")

const router = require("./routes/router")

const app = express()

dotenv.config({ path: "./config/config.env" })

app.use(express.json())

app.use("/api/v1/users", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

