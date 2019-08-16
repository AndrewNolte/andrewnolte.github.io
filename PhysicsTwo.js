"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhysicsTwo = function (_React$Component) {
	_inherits(PhysicsTwo, _React$Component);

	function PhysicsTwo() {
		_classCallCheck(this, PhysicsTwo);

		return _possibleConstructorReturn(this, (PhysicsTwo.__proto__ || Object.getPrototypeOf(PhysicsTwo)).apply(this, arguments));
	}

	_createClass(PhysicsTwo, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Equipotential Lines",
					link: "https://www.desmos.com/calculator/oppngbzxm9",
					desc: "This visualizes the equipotential lines that lie between charged particles. More particles can be added and moved around, and the z value will change the charge of that particle."
				}),
				React.createElement(DesmosCard, {
					name: "Lenses",
					link: "https://www.desmos.com/calculator/vuvjkn4b1v",
					desc: "This is a visualization for an image that is transformed by a lense. You can move the point around, and see where the image will be on the other side. You can also rotate the lense, and see what effect that has."
				}),
				React.createElement(DesmosCard, {
					name: "Snell's Law",
					link: "https://www.desmos.com/calculator/ahwgongbkg",
					desc: "This visualizes snell's law, as well as solves related problems. Snell's law determines the angle at which light is refracted when passing through different mediums."
				}),
				React.createElement(DesmosCard, {
					name: "A Rolling Wheel",
					link: "https://www.desmos.com/calculator/y3ufqgce0b",
					desc: "This simply demonstrated the motion of a point on a rolling wheel, a useful application of parametrics."
				}),
				React.createElement(DesmosCard, {
					name: "Pendulum Lab",
					link: "https://www.desmos.com/calculator/xiypji29qu",
					desc: "This lab was used to determine whether mass or string length had an effect on the period of a pendulum."
				}),
				React.createElement(DesmosCard, {
					name: "Boyle's Law Lab",
					link: "https://www.desmos.com/calculator/1s0g4gyzg6",
					desc: "This lab tested Boyle's law, which describes the inverse relationship of pressure and volume."
				})
			);
		}
	}]);

	return PhysicsTwo;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(PhysicsTwo, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}