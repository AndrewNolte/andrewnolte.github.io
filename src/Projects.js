"use strict";
class Projects extends React.Component {
	render() {
		return (
			<div>
				<Card name="Catan Tool" link="http://3.135.222.85:8501/">
					<Image src="./images/catansite.jpg" />
				</Card>
				<Card
					name="Lego Spirograph"
					link="https://medium.com/@anolte512/making-a-lego-spirograph-and-then-modeling-it-7b10dfa1d847?source=friends_link&sk=61e1532e50168a0953de5f12102b708e"
				>
					<Image src="./images/spiro.jpg" />
				</Card>
				<Card
					name="ParseArgs"
					link="https://github.com/AndrewNolte/ParseArgs"
				>
					<Image src="./images/code.jpg" />
				</Card>
				{/* <Card
					name="RobotPy"
					link="https://github.com/AndrewNolte/RobotPy"
				>
					<Image src="./images/robot.jpg" />
				</Card> */}
				<Card
					name="FPGA Flight Controller"
					link="https://github.com/kevin3-black/fpga-flight-controller"
				>
					<Image src="./images/drone.jpg" />
				</Card>
				<Card
					name="Web Crawler"
					link="https://github.com/AndrewNolte/WebCrawler"
				>
					<Image src="./images/webserver.png" />
				</Card>
				<Card
					name="Tetris AI"
					link="https://github.com/AndrewNolte/Tetris"
				>
					<Image src="./images/tetris.png" />
				</Card>
				<Card
					name="Image Manipulation"
					link="https://github.com/AndrewNolte/ImageManipulation"
				>
					<Image src="./images/linafter.png" />
				</Card>
				<Card
					name="Robot 2018"
					link="https://github.com/Vortx3735/Robot2018"
				>
					<Image src="./images/robot2018.png" />
				</Card>{" "}
				<Card
					name="Path Drawer"
					link="https://github.com/AndrewNolte/PathDrawer"
				>
					<Image src="./images/pathdrawer.png" />
				</Card>
				<Card
					name="Robot 2017"
					link="https://github.com/Vortx3735/Robot2017"
				>
					<Image src="./images/robot2017.png" />
				</Card>
			</div>
		);
	}
}
let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Projects />, domContainer);
