"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Algebra = function (_React$Component) {
	_inherits(Algebra, _React$Component);

	function Algebra() {
		_classCallCheck(this, Algebra);

		return _possibleConstructorReturn(this, (Algebra.__proto__ || Object.getPrototypeOf(Algebra)).apply(this, arguments));
	}

	_createClass(Algebra, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Ellipse defined by foci",
					link: "https://www.desmos.com/calculator/b20knyr7hr",
					desc: "This displays an ellipse as all of the points where the distance from two foci."
				}),
				React.createElement(DesmosCard, {
					name: "Focus and Directrix",
					link: "https://www.desmos.com/calculator/0tmvuq9ux3",
					desc: "This displays how a parabola can be defined by the set of points where a perpendicular to a line and a point have the same distance. Applications of the focus include focusing light onto a single point, most commonly used in telescopes."
				})
			);
		}
	}]);

	return Algebra;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Algebra, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}