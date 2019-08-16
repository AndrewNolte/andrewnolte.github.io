"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculus = function (_React$Component) {
	_inherits(Calculus, _React$Component);

	function Calculus() {
		_classCallCheck(this, Calculus);

		return _possibleConstructorReturn(this, (Calculus.__proto__ || Object.getPrototypeOf(Calculus)).apply(this, arguments));
	}

	_createClass(Calculus, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Riemann Sums",
					link: "https://www.desmos.com/calculator/5s7sewrgkk",
					desc: "Graphs for solving and visualizing different methods of Riemann Sum integration."
				}),
				React.createElement(DesmosCard, {
					name: "Implicit Differentiation",
					link: "https://www.desmos.com/calculator/c6tahb9zsp",
					desc: "A visual for implicit differentiation"
				}),
				React.createElement(DesmosCard, {
					name: "Bezier Curves",
					link: "https://www.desmos.com/calculator/gas8w4to3j",
					desc: "A visual for Bezier Curves."
				}),
				React.createElement(DesmosCard, {
					name: "The Slope at a point",
					link: "https://www.desmos.com/calculator/h5qm1yonfr",
					desc: "This was me essentially deriving the power rule when I was bored in AP Physics class."
				}),
				React.createElement(DesmosCard, {
					name: "Reflections on Parabola",
					link: "https://www.desmos.com/calculator/bc9plxtt3g",
					desc: "After learning how to find the slope at any point, I thought I'd make a visual for reflections on a parabola. This early version was mistakenly just displaying the tangent and normal line."
				}),
				React.createElement(DesmosCard, {
					name: "Tangent of Parabola",
					link: "https://www.desmos.com/calculator/mgkfmqwdhx",
					desc: "I had finally figured out how to find the slope at any point of a parabola, and my sophomore self thought this one was really cool."
				}),
				React.createElement(DesmosCard, {
					name: "3D Graphing Calculator",
					link: "https://www.desmos.com/calculator/54nbh79hjb",
					desc: "I didn't make this, but I thought it was pretty cool that you could make this all in 2D graphing software!"
				}),
				React.createElement(DesmosCard, {
					name: "Tabular Integration",
					link: "https://www.desmos.com/calculator/rye2gm5kwh",
					desc: "A simple graph for integrating tables of data."
				}),
				React.createElement(DesmosCard, {
					name: "Area Between Curves",
					link: "https://www.desmos.com/calculator/lwmzbeab3p",
					desc: "A Graph for visualizing and solving for the area between curves."
				}),
				React.createElement(DesmosCard, {
					name: "Reflections",
					link: "https://www.desmos.com/calculator/y7s2odpafs",
					desc: "Graph that generates true reflections from vertical beams for any function of x."
				}),
				React.createElement(DesmosCard, {
					name: "Point Reflections",
					link: "https://www.desmos.com/calculator/yv6tntwbud",
					desc: "Graph that generates true reflections from a points source for any function of x."
				})
			);
		}
	}]);

	return Calculus;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Calculus, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}