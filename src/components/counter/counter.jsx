import React from 'react';
import './counter.css';

export class Counter extends React.Component {
	render() {
		return (
			<div className='counterContainer'>
				<p className='like'>👍🏽 {this.props.likeCounter}</p>
				<p className='dislike'>{this.props.dislikeCounter}👎🏽</p>
			</div>
		);
	}
}
