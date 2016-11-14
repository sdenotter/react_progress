var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require("../components/Main")
var Home = require("../components/Home")
var hashHistory = ReactRouter.hashHistory;
var TaskContainer = require("../components/TaskContainer.js")




var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component = {Main}>
        <IndexRoute  component = {Home} />
        <Route path="container_1" component ={TaskContainer} />
        
    </Route>
    
   
  
  </Router>
    
);

module.exports = routes