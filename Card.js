"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "collection-item w-dyn-item w-col w-col-4" },
				React.createElement(
					"a",
					{
						target: "_blank",
						href: this.props.link,
						className: "w-inline-block"
					},
					React.createElement(
						"h3",
						null,
						this.props.name
					),
					this.props.children
				)
			);
		}
	}]);

	return Card;
}(React.Component);

var Image = function (_React$Component2) {
	_inherits(Image, _React$Component2);

	function Image() {
		var _ref;

		var _temp, _this2, _ret;

		_classCallCheck(this, Image);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this2), _this2.getDesc = function (d) {
			if (d == null) {
				return;
			} else {
				return React.createElement(
					"p",
					null,
					d
				);
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
	}

	_createClass(Image, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.getDesc(this.props.desc),
				React.createElement("img", { src: this.props.src, alt: "", className: "project-image" })
			);
		}
	}]);

	return Image;
}(React.Component);

var DesmosCard = function (_React$Component3) {
	_inherits(DesmosCard, _React$Component3);

	function DesmosCard() {
		_classCallCheck(this, DesmosCard);

		return _possibleConstructorReturn(this, (DesmosCard.__proto__ || Object.getPrototypeOf(DesmosCard)).apply(this, arguments));
	}

	_createClass(DesmosCard, [{
		key: "render",
		value: function render() {
			return React.createElement(
				Card,
				{ name: this.props.name, link: this.props.link },
				React.createElement(
					"div",
					{ className: "paragraph" },
					React.createElement(
						"p",
						null,
						this.props.desc
					)
				),
				React.createElement(
					"div",
					null,
					React.createElement("iframe", {
						src: this.props.link + "?embed",
						frameBorder: "0",
						width: "100%"
					})
				)
			);
		}
	}]);

	return DesmosCard;
}(React.Component);

{
	/* <div class="w-dyn-items w-row" id="project-drop-id">
 <div class="collection-item w-dyn-item w-col w-col-4">
    <a href="#" class="w-inline-block">
        <h3></h3>
        <div>
            <p>asdf</p>
            <img src="" alt="" class="project-image" />
        </div>
    </a>
 </div>
 </div> */
}