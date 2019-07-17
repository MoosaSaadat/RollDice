import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	static defaultProps = {
		face: "one",
		rolling: false
	};
	render () {
		return (
			<i
				className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
					"Die-Rolling"}`}
			/>
		);
	}
}

export default Die;
