"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
	_inherits(NavBar, _React$Component);

	function NavBar() {
		_classCallCheck(this, NavBar);

		return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	}

	_createClass(NavBar, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{
					"data-collapse": "medium",
					"data-animation": "default",
					"data-duration": "400",
					"class": "nav w-nav"
				},
				React.createElement(
					"div",
					{ "class": "w-container" },
					React.createElement(
						"a",
						{ href: "#", "class": "logo w-nav-brand" },
						React.createElement(
							"div",
							{ "class": "text-block" },
							"N"
						)
					),
					React.createElement(
						"nav",
						{ role: "navigation", "class": "nav-menu w-nav-menu" },
						React.createElement(
							"a",
							{
								target: "_blank",
								href: "https://github.com/AndrewNolte",
								"class": "nav-link w-nav-link w--current"
							},
							"Projects"
						),
						React.createElement(
							"div",
							{ "data-hover": "1", "data-delay": "100", "class": "w-dropdown" },
							React.createElement(
								"div",
								{
									"class": "nav-link w-dropdown-toggle",
									"data-ix": "new-interaction"
								},
								React.createElement("div", { "class": "w-icon-dropdown-toggle" }),
								React.createElement(
									"div",
									null,
									"Graphs"
								)
							),
							React.createElement(
								"nav",
								{ "class": "w-dropdown-list" },
								React.createElement(
									"a",
									{
										href: "./robotics.html",
										"class": "w-dropdown-link"
									},
									"Robotics"
								),
								React.createElement(
									"a",
									{
										href: "./physics.html",
										"class": "w-dropdown-link"
									},
									"Physics"
								),
								React.createElement(
									"a",
									{
										href: "./physics2.html",
										"class": "w-dropdown-link"
									},
									"Physics 2"
								),
								React.createElement(
									"a",
									{
										href: "./geometry.html",
										"class": "w-dropdown-link"
									},
									"Geometry"
								),
								React.createElement(
									"a",
									{
										href: "./calculus.html",
										"class": "w-dropdown-link"
									},
									"Calculus"
								),
								React.createElement(
									"a",
									{
										href: "./algebra.html",
										"class": "w-dropdown-link"
									},
									"Algebra"
								),
								React.createElement(
									"a",
									{
										href: "./statistics.html",
										"class": "w-dropdown-link"
									},
									"Statistics"
								)
							)
						),
						React.createElement(
							"a",
							{ href: "contact.html", "class": "nav-link w-nav-link" },
							"Contact"
						)
					),
					React.createElement(
						"div",
						{ "class": "menu-button w-nav-button" },
						React.createElement("div", { "class": "w-icon-nav-menu" })
					)
				)
			);
		}
	}]);

	return NavBar;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(NavBar, null), domContainer);