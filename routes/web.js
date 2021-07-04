var homeRoute = require('../app/controller/homeControll')
var DomainRoute = require('../app/controller/domianController')
const allRoutes = function intiRoutes(app){
      app.get('/',homeRoute().homeRoute)
      app.get('/domain',DomainRoute().Domain)
}


module.exports = allRoutes;