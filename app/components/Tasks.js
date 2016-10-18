var React = require('react');
var Task = require("./Task.js")
var headerStyle = require('../styles').headerStyle;
var backgroundStyle = require("../styles").backgroundStyle
var marginTop = require("../styles").marginTop


var taskStyle= {
        listStyleType: "none"
    }

var Tasks = React.createClass({
    
    
    
    render: function() {
        
        
        return (
            <div>
                <ul style={taskStyle}>
                    {this.props.data.map(({id, task}) =><li key={id}><Task onDelete={this.props.onDelete.bind(null, id)} task={task} /></li>)}
                </ul>
            </div>
        )
    }
})

module.exports = Tasks