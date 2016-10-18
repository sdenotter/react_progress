var React = require('react');





var Task = React.createClass({
    
    
    
    render: function() {
        
        
        return (
            <div>
                <span>{this.props.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button className="button tiny hollow secondary" onClick={this.props.onDelete}>X</button>
            </div>
        )
    }
})

module.exports = Task