var React = require('react');





var Task = React.createClass({
    
    getInitialState: function(){
        return {
            isEditable: false,
            taskname: ''
        }
    },
     
    render: function() {
        
        return (
            <div>
                <span contentEditable={true} onInput={this.props.onInput}>{this.props.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button className="button tiny hollow secondary" onClick={this.props.onDelete} >X</button>
               
                
            </div>
        )
    }
})

module.exports = Task

// onClick={this.props.onDelete}