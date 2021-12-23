import './mainPage.css';
import React from 'react';

import { Img } from '../components/img/imgs';
import { dogApi } from '../components/api/api';
import { Votes } from '../components/vote/votes';
import { Counter } from '../components/counter/counter';

export class MainPage extends React.Component {
	state = {
		url: '',
		likeCounter: 0,
		dislikeCounter: 0,
	};

	generateImg = async () => {
		const url = await dogApi.dogApiData();
		this.setState({ url });
		console.log(url);
	};

	componentDidMount() {
		this.generateImg();
	}

	addingCounter = (status) => {
		this.setState({ [status]: this.state[status] + 1 });
	};

	render() {
		return (
			<div className='container'>
				<div className='wrapper'>
					<Counter
						likeCounter={this.state.likeCounter}
						dislikeCounter={this.state.dislikeCounter}
					/>
				</div>
				<div className='wrapper'>
					<Img url={this.state.url} />
				</div>
				<div className='wrapper'>
					<Votes
						generateImg={this.generateImg}
						addingCounter={this.addingCounter}
					/>
				</div>
			</div>
		);
	}
}
