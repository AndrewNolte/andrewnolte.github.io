"use strict";
class Algebra extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Ellipse defined by foci"
					link="https://www.desmos.com/calculator/b20knyr7hr"
					desc="This displays an ellipse as all of the points where the distance from two foci."
				/>
				<DesmosCard
					name="Focus and Directrix"
					link="https://www.desmos.com/calculator/0tmvuq9ux3"
					desc="This displays how a parabola can be defined by the set of points where a perpendicular to a line and a point have the same distance. Applications of the focus include focusing light onto a single point, most commonly used in telescopes."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Algebra />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
