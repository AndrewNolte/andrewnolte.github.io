"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_React$Component) {
	_inherits(Statistics, _React$Component);

	function Statistics() {
		_classCallCheck(this, Statistics);

		return _possibleConstructorReturn(this, (Statistics.__proto__ || Object.getPrototypeOf(Statistics)).apply(this, arguments));
	}

	_createClass(Statistics, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(DesmosCard, {
					name: "Probability Curves",
					link: "https://www.desmos.com/calculator/fs7m11nqx0",
					desc: "This graph allows input for data to visualize a probability curve, and then analyze that data by displaying the mean, variance, and standard deviation."
				}),
				React.createElement(DesmosCard, {
					name: "Combinations",
					link: "https://www.desmos.com/calculator/4luguf7yam",
					desc: "This graph allows input for the number of subjects and probability of success, and outputs the probability that a specific number of subjects succeed. It also allows for calculation of ranges of these numbers."
				}),
				React.createElement(DesmosCard, {
					name: "Geometric Curves",
					link: "https://www.desmos.com/calculator/bda2rimxc3",
					desc: "This graph allows input for the number of trials, and the probability of success, and then outputs the chance that it takes c times to get a success, and optionally sums this function to get the probability it takes less than c times."
				})
			);
		}
	}]);

	return Statistics;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Statistics, null), domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}