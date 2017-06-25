/**
 * sec component.
 */
import * as React from 'react';
import './style.scss';

interface ISecProps {
	title: string;
	en_title: string;
	className: string;
	children: any;
}
export const Sec = (props: ISecProps) =>
	<section className={ `sec row ${props.className}` }>
		<header className="col-12">
			<h5>
				<span className="cn">{ props.title }</span>
				<span className="en">{ props.en_title }</span>
			</h5>
		</header>
		{ props.children }
	</section>;
