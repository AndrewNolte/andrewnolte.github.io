"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Physics = function (_React$Component) {
	_inherits(Physics, _React$Component);

	function Physics() {
		_classCallCheck(this, Physics);

		return _possibleConstructorReturn(this, (Physics.__proto__ || Object.getPrototypeOf(Physics)).apply(this, arguments));
	}

	_createClass(Physics, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Inclined Plane",
					link: "https://www.desmos.com/calculator/vemgmg5gmd",
					desc: "The very first graph I saved, used to do physics homework."
				}),
				React.createElement(DesmosCard, {
					name: "Modified Atwoods Machine",
					link: "https://www.desmos.com/calculator/witvwhzjgg",
					desc: "Model of an atwoods machine, for solving related physics problems (Two weights connected with a string)"
				}),
				React.createElement(DesmosCard, {
					name: "Hooke's Law Lab",
					link: "https://www.desmos.com/calculator/nkuin1ixzp",
					desc: "This models the data collected for a Hooke's law lab, which relates the force a spring exerts when stretched or compressed."
				}),
				React.createElement(DesmosCard, {
					name: "Projectile Motion",
					link: "https://www.desmos.com/calculator/hgwdei012x",
					desc: "This was the first graph that I really liked, because this was an intriguing optimization problem that I was determined to solve, which turned into me learning about calculus early."
				}),
				React.createElement(DesmosCard, {
					name: "Sound Harmonics",
					link: "https://www.desmos.com/calculator/ne23kdihh3",
					desc: "This displays the effect that multiple frequencies have when combined. A major chord consisting of a root, 3rd, and 4th is displayed."
				})
			);
		}
	}]);

	return Physics;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Physics, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}