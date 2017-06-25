/**
 * header component.
 */
import * as classnames from 'classnames';
import * as React from 'react';
import './style.scss';

interface IState {
	top: number;
	height: number;
}

interface IProps {
	version?: string;
}

export class Header extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { top: 0, height: 0 };
	}

	public componentDidMount() {
		this.setState({ height: (this.refs.header as any).clientHeight });
		document.addEventListener('scroll', this._handleScroll.bind(this));
	}

	public componentWillUnmount() {
		document.removeEventListener('scroll', this._handleScroll.bind(this));
	}

	public render() {
		const { top, height = 1 } = this.state;

		const tranHeight = 4;	// 过度区间高度倍数

		let per = -top / height / tranHeight;
		per = per ? (per > 1 ? 1 : per) : 0;

		return (
			<header id="header" className={ `row` } style={ { background: `rgba(255, 255, 255, ${per})` } } ref="header">

			</header>
		);
	}

	private _handleScroll() {
		const { top } = document.body.getBoundingClientRect();
		this.setState({ top });
	}
}
