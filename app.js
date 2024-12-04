const express = require('express')
const app = express()

app.listen(7777)

const userRouter = require('./routes/users')
const channelRouter = require('./routes/channels')

app.use("/", userRouter)
app.use("/channels", channelRouter)