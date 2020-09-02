"use strict";
class Statistics extends React.Component {
	render() {
		return (
			<div>
				<DesmosCard
					name="Probability Curves"
					link="https://www.desmos.com/calculator/fs7m11nqx0"
					desc="This graph allows input for data to visualize a probability curve, and then analyze that data by displaying the mean, variance, and standard deviation."
				/>
				<DesmosCard
					name="Combinations"
					link="https://www.desmos.com/calculator/4luguf7yam"
					desc="This graph allows input for the number of subjects and probability of success, and outputs the probability that a specific number of subjects succeed. It also allows for calculation of ranges of these numbers."
				/>
				<DesmosCard
					name="Geometric Curves"
					link="https://www.desmos.com/calculator/bda2rimxc3"
					desc="This graph allows input for the number of trials, and the probability of success, and then outputs the chance that it takes c times to get a success, and optionally sums this function to get the probability it takes less than c times."
				/>
			</div>
		);
	}
}

let domContainer = document.querySelector("#project-drop-id");
ReactDOM.render(<Statistics />, domContainer);

{
	/* <DesmosCard
                    name=""
                    link=""
                    desc=""
                    /> */
}
