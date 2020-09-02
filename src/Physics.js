"use strict";
class Physics extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Inclined Plane"
					link="https://www.desmos.com/calculator/vemgmg5gmd"
					desc="The very first graph I saved, used to do physics homework."
				/>
				<DesmosCard
					name="Modified Atwoods Machine"
					link="https://www.desmos.com/calculator/witvwhzjgg"
					desc="Model of an atwoods machine, for solving related physics problems (Two weights connected with a string)"
				/>
				<DesmosCard
					name="Hooke's Law Lab"
					link="https://www.desmos.com/calculator/nkuin1ixzp"
					desc="This models the data collected for a Hooke's law lab, which relates the force a spring exerts when stretched or compressed."
				/>
				<DesmosCard
					name="Projectile Motion"
					link="https://www.desmos.com/calculator/hgwdei012x"
					desc="This was the first graph that I really liked, because this was an intriguing optimization problem that I was determined to solve, which turned into me learning about calculus early."
				/>
				<DesmosCard
					name="Sound Harmonics"
					link="https://www.desmos.com/calculator/ne23kdihh3"
					desc="This displays the effect that multiple frequencies have when combined. A major chord consisting of a root, 3rd, and 4th is displayed."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Physics />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
