"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
	_inherits(Projects, _React$Component);

	function Projects() {
		_classCallCheck(this, Projects);

		return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
	}

	_createClass(Projects, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Sinusoidal Profile (vi, vf, d)",
					link: "https://www.desmos.com/calculator/uflcb1tpbg",
					desc: "A graph that models a sinusoidal motion profile for the robot, which is defined in terms of initial velocity, final velocity, and distance."
				}),
				React.createElement(DesmosCard, {
					name: "Sinusoidal Profile (vi, d, a)",
					link: "https://www.desmos.com/calculator/zdsplsxxvt",
					desc: "A graph that models a sinusoidal motion profile for the robot, which is defined in terms of initial velocity, distance, and peak acceleration."
				}),
				React.createElement(DesmosCard, {
					name: "Bezier Curves",
					link: "https://www.desmos.com/calculator/kfxusqrzxr",
					desc: "The type of curve that the robot follows. (I obviously didn't invent the curve!)"
				}),
				React.createElement(DesmosCard, {
					name: "Arcade vs Normal Drive",
					link: "https://www.desmos.com/calculator/rkrejt1t0m",
					desc: 'A quick little visualization that shows the difference between FRC\'s standard "Arcade Drive" and the generic "Normal Drive"'
				}),
				React.createElement(DesmosCard, {
					name: "Trapezoidal Profile",
					link: "https://www.desmos.com/calculator/kwjz1rftld",
					desc: "A model of a trapzoidal motion profile, in which acceleration is ramped up and down."
				}),
				React.createElement(DesmosCard, {
					name: "Exponential Drive",
					link: "https://www.desmos.com/calculator/purgigwz0v",
					desc: "A model of the teleop drive function used in the 2016 and 2017 seasons. Will be replaced with something revolutionary..."
				})
			);
		}
	}]);

	return Projects;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Projects, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}