import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dieOne: "one",
			dieTwo: "two",
			isRolling: false
		};
		this.doMagic = this.doMagic.bind(this);
	}
	doMagic () {
		let numToWords = [ "one", "two", "three", "four", "five", "six" ];
		let newOne = Math.floor(Math.random() * 6);
		let newTwo = Math.floor(Math.random() * 6);
		this.setState({
			dieOne: numToWords[newOne],
			dieTwo: numToWords[newTwo],
			isRolling: true
		});
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 500);
	}
	render () {
		return (
			<div className="RollDice">
				<div className="RollDice-header">
					<h1>Simple Dice App :)</h1>
					<h4>An app made to practice "React Downward Data Flow".</h4>
					<h4>
						RollDice Component sends down the "dice face" as props to Die
						Component.
					</h4>
				</div>
				<div>
					<Die face={this.state.dieOne} rolling={this.state.isRolling} />
					<Die face={this.state.dieTwo} rolling={this.state.isRolling} />
				</div>
				<button
					onClick={this.doMagic}
					className="RollDice-Button"
					disabled={this.state.isRolling}>
					{this.state.isRolling ? "Rolling..." : "Roll Dice!"}
				</button>
			</div>
		);
	}
}

export default RollDice;
