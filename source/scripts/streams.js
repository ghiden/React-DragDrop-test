var _ = require('ramda'),
	Bacon = require('baconjs'),
    Hammer = require('hammerjs');


// --------------- HELPER FUNCTIONS ----------------------
var baconStream = _.curry(function (event, target) {
    return Bacon.fromEventTarget(target, event);
});

// converts a hammer Stram to an Bacon-Stream
var hammerStream = _.curry(function(event, target) {
    return Bacon.fromBinder(function(sink) {
        function push(e) {
            sink(e);
        }
        Hammer(target).on(event, push)
        return function() {
            Hammer(target).off(event, push)
        }
    })
});

// converts a REACT-Synthetic-Event to a baconjs stream!
// Missing :D

// --------------- STREAMS ----------------------
var dragStream = hammerStream('panstart panmove');
var dragEndStream = hammerStream('panend');


module.exports = {
	dragStream: dragStream,
    dragEndStream: dragEndStream,
    dragOverStream: dragOverStream,
    baconStream: baconStream
}