/**
 * skill progress component.
 */
import * as React from 'react';
import './style.scss';

interface IProps {
	name: string;
	progress: number;
	color: string;
}

export const SkillProgress = (props: IProps) =>
	<div className="skill-progress" style={ { borderColor: props.color } }>
		<div className="left">
			<div className="circle" style={ {
				transform: `rotate(${135 + (props.progress > 50 ? props.progress - 50 : 0) * 1.8}deg)`,
			} }></div>
		</div>
		<div className="right">
			<div className="circle" style={ {
				transform: `rotate(${-135 + (props.progress > 50 ? 50 : props.progress) * 3.6}deg)`,
			} }></div>
		</div>
		<p className="name">{ props.name }</p>
	</div>;
