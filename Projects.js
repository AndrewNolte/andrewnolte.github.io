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
				React.createElement(
					Card,
					{ name: "Catan Tool", link: "http://3.135.222.85:8501/" },
					React.createElement(Image, { src: "./images/catansite.jpg" })
				),
				React.createElement(
					Card,
					{
						name: "Lego Spirograph",
						link: "https://medium.com/@anolte512/making-a-lego-spirograph-and-then-modeling-it-7b10dfa1d847?source=friends_link&sk=61e1532e50168a0953de5f12102b708e"
					},
					React.createElement(Image, { src: "./images/spiro.jpg" })
				),
				React.createElement(
					Card,
					{
						name: "ParseArgs",
						link: "https://github.com/AndrewNolte/ParseArgs"
					},
					React.createElement(Image, { src: "./images/code.jpg" })
				),
				React.createElement(
					Card,
					{
						name: "FPGA Flight Controller",
						link: "https://github.com/kevin3-black/fpga-flight-controller"
					},
					React.createElement(Image, { src: "./images/drone.jpg" })
				),
				React.createElement(
					Card,
					{
						name: "Web Crawler",
						link: "https://github.com/AndrewNolte/WebCrawler"
					},
					React.createElement(Image, { src: "./images/webserver.png" })
				),
				React.createElement(
					Card,
					{
						name: "Tetris AI",
						link: "https://github.com/AndrewNolte/Tetris"
					},
					React.createElement(Image, { src: "./images/tetris.png" })
				),
				React.createElement(
					Card,
					{
						name: "Image Manipulation",
						link: "https://github.com/AndrewNolte/ImageManipulation"
					},
					React.createElement(Image, { src: "./images/linafter.png" })
				),
				React.createElement(
					Card,
					{
						name: "Robot 2018",
						link: "https://github.com/Vortx3735/Robot2018"
					},
					React.createElement(Image, { src: "./images/robot2018.png" })
				),
				" ",
				React.createElement(
					Card,
					{
						name: "Path Drawer",
						link: "https://github.com/AndrewNolte/PathDrawer"
					},
					React.createElement(Image, { src: "./images/pathdrawer.png" })
				),
				React.createElement(
					Card,
					{
						name: "Robot 2017",
						link: "https://github.com/Vortx3735/Robot2017"
					},
					React.createElement(Image, { src: "./images/robot2017.png" })
				)
			);
		}
	}]);

	return Projects;
}(React.Component);

var domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(React.createElement(Projects, null), domContainer);