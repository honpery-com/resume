/**
 * resume index component.
 */
import * as React from 'react';
import { Cover } from '../cover';
import { Header } from '../header';
import './style.scss';

interface IState {
	data: any;

}

export class App extends React.Component {

	public componentDidMount() {
		//
	}

	public render() {
		return (
			<div id="resume-app" onScroll={ this._handleScroll }>
				<Header></Header>
				<Cover></Cover>
			</div>
		);
	}

	private _handleScroll() {
		console.log(this.refs.app);
		// this.refs.header.style.top = document.documentElement.scrollTop + 'px';
	}
}
