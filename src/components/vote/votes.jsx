import React from 'react';
import './vote.css';

export class Votes extends React.Component {
	newImg = async (e) => {
		this.props.addingCounter(e.target.value);
		this.props.generateImg();
	};

	render() {
		return (
			<div className='voteContainer'>
				<button onClick={(e) => this.newImg(e)} value='likeCounter'>
					😍
				</button>
				<button onClick={(e) => this.newImg(e)} value='dislikeCounter'>
					🥵
				</button>
			</div>
		);
	}
}
