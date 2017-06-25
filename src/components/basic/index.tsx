/**
 * basic component.
 */
import * as React from 'react';
import { Sec } from '../common';
import './style.scss';

export class Basic extends React.Component {
	public render() {
		return (
			<Sec className="basic" title="基本信息" en_title="basic">

			</Sec>
		);
	}
}
