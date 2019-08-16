"use strict";
class Geometry extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Euler's Triangle"
					link="https://www.desmos.com/calculator/fue49prbef"
					desc="This is a graphical model of a triangle, which has movable points, and displays the four sets of lines that each triangle has. Three of the sets define the euler line, so click around to see which ones!"
				/>
				<DesmosCard
					name="Ambigous Case: SSA"
					link="https://www.desmos.com/calculator/kmlstx3ozm"
					desc="This shows why angle-side-side cannot prove congruency in triangles- there are two possible triangles."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Geometry />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
