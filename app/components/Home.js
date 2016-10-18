var React = require('react');
var ReactRouter = require("react-router")
var Link = ReactRouter.Link;




var Home = React.createClass({
    
    render: function() {
        
        return (
            <div className = "row">
                <div className = 'small-12  text-center'>
                    <h1>Task Progress Tracker</h1>
                    <p>Easily Measure How Effectively You Are Using Your Time</p>
                    <Link to="container_1">
                        <button type="button" className="button">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
})

module.exports = Home;