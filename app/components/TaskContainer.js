var React = require('react');
var Tasks = require('./Tasks.js');
var headerStyle = require('../styles').headerStyle;
var backgroundStyle = require("../styles").backgroundStyle;
var marginTop = require("../styles").marginTop;
var ReactRouter = require("react-router")
var Link = ReactRouter.Link;



var TaskContainer = React.createClass({
    
    // Set Initial State and data structure for Application
    
    getInitialState: function() {

        return {
            
            // Taskname holds current value written to input field
            
            taskname: '',
            tasks: [{
                id: 1,
                task: "Meditation"
            },
                {
                    id: 2,
                    task: "Programming"
                }]
        }
    },
    
    // Code to process adding new new tasks, writes results to application state
    
    onSubmit: function(e) {
        e.preventDefault();
        var tn = this.state.taskname
        var ts = this.state.tasks
        ts.push({ id: ts.length + 1, task: tn })
        this.setState({
            taskname: '',
            tasks: ts
        });
    },
    
    // Captures text changes to input field
    onChange: function(e){
        this.setState({
            taskname: e.target.value
        })
        
    },
    
    // Adds Blank note to app (Maybe Unecessary)
    
    addNote: function() {
        var temp = this.state.tasks
        temp.push({ id: temp.length + 1, task: "Blank" })
        this.setState({
            taskname: '',
            tasks: temp
        })
    },
    
    
    deleteTask: function(id, e) {
        e.stopPropagation()
        var tempTask = this.state.tasks
        var temp = tempTask.filter(note => note.id !== id)
        clearInterval(this.incrementer)
        this.setState({
            taskname: '',
            tasks: temp
        })
    },
    
    
    handleChange: function(id, e) {
        // Grab value from span
        var tempValue = e.target.innerText

        // Grab current component state
        var tempArray = this.state.tasks
        // Select state where id matches the editied value. Append tempValue to this id. Write to State
        tempArray = tempArray.map(function(item) {
            if (item.id === id) {
                item.id = id;
                item.task = tempValue;
                return (item)
            } else {
                return (item)
            }
        })
        this.setState({
            taskname: "",
            tasks: tempArray
        })

    },

    
    
    render: function() {

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
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button className="button secondary" onClick={this.addNote}>+</button>
                        </div>
                        <div className="row">
                            <br/>
                            <button className="button success" onClick={this.onSubmit}>Submit</button>
                        </div>
                        <div className="row">
                            <br/>
                            <Tasks data = {send} onDelete={this.deleteTask} onInput={this.handleChange} />
                        </div>
                        <div className="row">
                            <br/><br/><br/>
                            <button className="button alert" onClick={() => console.log(this.state.tasks) }>ShowState</button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button className="button alert" onClick={() => console.log() }>DBSTUFF</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
})

module.exports = TaskContainer