/**
 * header component.
 */
import * as classnames from 'classnames';
import * as React from 'react';
import './style.scss';

export class Header extends React.Component {

	public componentDidMount() {
		document.documentElement.addEventListener('scroll', this._handleScroll);
	}

	public componentWillUnmount() {
		document.documentElement.removeEventListener('scroll', this._handleScroll);
	}

	public render() {
		return (
			<header id="header" className={ `row ${classnames({ top: true })}` } ref="header">
				header
			</header>
		);
	}

	private _handleScroll() {
		console.log(this.refs.header);
		// this.refs.header.style.top = document.documentElement.scrollTop + 'px';
	}
}
