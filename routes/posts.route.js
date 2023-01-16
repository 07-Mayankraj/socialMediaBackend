const express = require('express')
const controller  = require('../controllers/posts.controller')
const postRoute = express.Router()

postRoute.get('/' , controller.getall)
postRoute.post('/create', controller.create)
postRoute.patch('/update/:id', controller.update)
postRoute.delete('/delete/:id', controller.delete)


module.exports = postRoute