var React = require('react');
var Tasks = require('./Tasks.js');
var headerStyle = require('../styles').headerStyle;
var backgroundStyle = require("../styles").backgroundStyle;
var marginTop = require("../styles").marginTop;


var data = [
     {
                   id: 1,
                   task: "Meditation"
               },
               {
                   id: 2,
                   task: "Programming"
               }
    
]



var TaskContainer = React.createClass({
    
    getInitialState: function() {
      
    return {
      taskname: '',
      tasks: [{
                   id: 1,
                   task: "Meditation"
               },
               {
                   id: 2,
                   task: "Programming"
               }   ]
}
    },
    
    onSubmit: function(e){
        e.preventDefault();
        var taskname = this.state.taskname
        var tn = this.state.taskname
        var ts = this.state.tasks
        ts.push({id: ts.length+1, task: tn})
        this.setState({
            taskname: '',
            tasks: ts
        });
        data.push({id: data.length+1, task: taskname})
        console.log(this.state.tasks)
        console.log(data)
    },
    
    onChange: function(e){
        this.setState({
            taskname: e.target.value
        })
        
    },
    
    addNote: function(){
        var temp = this.state.tasks
        temp.push({id: temp.length+1, task:"Blank"})
        this.setState({
            taskname: '',
            tasks: temp
        })
        console.log(temp)
    },
    
    
    deleteTask: function(id,e) {
        e.stopPropagation()
        var tempTask = this.state.tasks
        var temp = tempTask.filter(note => note.id !== id)
        this.setState({
            taskname: '',
            tasks: temp
        })
    },
    
    
    render: function () {
       var send = this.state.tasks
        return (
            <div>
                <div className = "row">
                    <div className = "columns small-8" style={headerStyle}>
                        <div>
                        <h3>Please Select A Task</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className = "columns small-8" style= {backgroundStyle} >
                        <div className = "row">
                            <br/>
                            <input className="align-center"
                                placeholder="Text"
                                onChange = {this.onChange}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="button secondary" onClick={this.addNote}>+</button>
                        </div>
                        <div className="row">
                        <br/>
                            <button className="button success" onClick={this.onSubmit}>Submit</button>
                        </div>
                        <div className="row">
                        <br/>
                            <Tasks data = {send} onDelete={this.deleteTask}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }})


module.exports = TaskContainer