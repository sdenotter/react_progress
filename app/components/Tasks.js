var React = require('react');
var Task = require("./Task.js")
var headerStyle = require('../static/css').headerStyle;
var backgroundStyle = require("../static/css").backgroundStyle
var marginTop = require("../static/css").marginTop


var taskStyle= {
        listStyleType: "none"
    }

var Tasks = React.createClass({
    
    
    
    render: function() {
        
        
        return (
            <div>
                <ul style={taskStyle}>
                    {this.props.data.map(({id, task}) =><li key={id}><Task refs={id} onInput={this.props.onInput.bind(null, id)} onDelete={this.props.onDelete.bind(null, id)} task={task} /></li>)}
                </ul>
            </div>
        )
    }
})

module.exports = Tasks