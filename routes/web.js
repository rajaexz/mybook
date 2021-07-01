var homeRoute = require('../app/controller/homeControll')
const allRoutes = function intiRoutes(app){
      app.get('/',homeRoute().homeRoute)
}

module.exports = allRoutes;