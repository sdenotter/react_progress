var React = require('react');
var timerStyle = require('../styles').timerStyle;
var buttonStyle = require('../styles').buttonStyle;
var Timer = require('timer-stopwatch');

var mTop = function(rem) {
    return (
        {
            marginTop: rem.toString()+"rem"
        }
    )
}


var Task = React.createClass({
    
    getInitialState: function(){
        return {
            isPaused: true,
            taskname: '',
            secondsElapsed: 0,
            lastClearedIncrementer: null
        }
        this.incrementer = null
    },
     getImage: function(){
         var curr = this.state.isPaused
         if(curr){
         return("../../ext/images/play.png")
         } else {
             return ("../../ext/images/pause.png")
         }
     },
     startClick: function(){
         this.incrementer = setInterval( () =>
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1
            })
            , 1000);
     },
     stopClick: function(){
         clearInterval(this.incrementer)
         this.setState({
            lastClearedIncrement: this.incrementer,
        })
     },
     
     resetClick: function(){
          clearInterval(this.incrementer);
            this.setState({
                secondsElapsed: 0,
            });
     },
     
     handleClick: function() {
        
         curr = this.state.isPaused
         if (curr){
             curr = false;
             this.startClick()
             
         } else {
             curr = true
             this.stopClick()
             
             
         } 
         this.setState({
             isPaused: curr,
         })
         
         // Start Timer
         
     },
     
    render: function() {
        
        return (
            <div>
                <div style={timerStyle} className="row" >
                
                <div className="columns small-2">
                    <button style={buttonStyle} onClick={this.handleClick}><img src={this.getImage()}></img></button>
                </div>
                
                <div className="columns small-5 align-left">
                    <span contentEditable={true} onInput={this.props.onInput}>{this.props.task}</span>
                </div>
                
                <div className="columns small-3">
                    <span id="timer">{this.state.secondsElapsed}</span>
                </div>
                <div className="columns small-2">
                    <button className="button tiny secondary" onClick={this.props.onDelete} style={mTop(0.7)} >X</button>
                </div>

                </div>
            </div>
        )
    }
})

module.exports = Task