/*** @jsx React.DOM */
var React = require("react/lib/reactWithAddons"),
	Streams = require('./streams'),
	_ = require('ramda');

	var log = function(x) { console.log(x); return x };

var BigBox = React.createClass({
  	render: function() {
	    return (
	      <div className="box big"></div>
	    );
  	}
});

var SmallBox = React.createClass({	
	setXandY: function(xandy) { 
		this.getDOMNode().style.left = xandy.deltaX+'px';
		this.getDOMNode().style.top = xandy.deltaY +'px';
	},
	componentDidMount: function() {
		if(this.props.draggable) {
			Streams.dragStream(this.getDOMNode()).onValue(this.setXandY);
		};
	},
  	render: function() {
	    return (
	      <div className="box small"></div>
	    );
  	}
});

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<BigBox/>
      	<SmallBox draggable={true}/>
      </div>
    );
  }
});







React.renderComponent(
  <App />,
  document.getElementById('content')
);
