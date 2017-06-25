/**
 * cover component.
 */
import * as classnames from 'classnames';
import * as React from 'react';
import './style.scss';

export class Cover extends React.Component {
	public render() {
		return (
			<div className="cover row" style={ { backgroundImage: `url(${require('./bg.jpg')})` } }>
			</div>
		);
	}
}
